import { toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
const CallForm = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        mail: "",
        message: ""
    })

    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async () => {
        if (data.name !== "" && data.phone !== "") {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                setData({
                    name: "",
                    phone: "",
                    mail: "",
                    message: ""
                })
                toast.success('En kısa süre içerisinde sizlere dönüş sağlayacağız.', { duration: 5000, position: 'bottom-right' })
            } else {
                toast.error("Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.", { duration: 5000, position: 'bottom-right' })
            }
        } else {
            toast.error("Lütfen tüm zorunlu alanların dolu olduğundan emin olunuz.", { duration: 5000, position: 'bottom-right' })
        }
    }
    return (
        <div className="flex flex-col gap-4 items-center md:items-start mx-4 md:mx-0">
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white"
                placeholder="İsminiz *" onChange={onChangeHandler} name="name" value={data.name} />
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white"
                placeholder="Telefon Numaranız*" onChange={onChangeHandler} name="phone" value={data.phone} />
            <button href='/' className="bg-second text-white text-base py-3 px-5 font-montserratBold" onClick={handleClick}>GÖNDER</button>
        </div>
    )
}

export default CallForm;