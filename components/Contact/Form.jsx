import { toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
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

    const onClickHandler = async () => {
        if (data.name !== "" && data.mail !== "" && data.message !== "") {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.status === 200) {
                setData({
                    name: "",
                    phone: "",
                    mail: "",
                    message: ""
                })
                toast.success('En kısa süre içerisinde sizlere dönüş sağlayacağız.', { duration: 5000 })
            } else {
                toast.error("Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.", { duration: 5000 })
            }
        } else {
            toast.error("Lütfen tüm zorunlu alanların dolu olduğundan emin olunuz.", { duration: 5000, position: 'bottom-right' })
        }
    }


    return (
        <div className="bg-gradient-to-r from-primary to-second py-20 px-12 flex flex-col gap-6 items-start">
            <h2 className="font-montserratBold text-4xl text-white">Fiyat Teklifi Al</h2>
            <p className="font-montserrat text-white mb-6 text-sm">İstediğiniz Hizmet için bizlerle şimdi iletişime geçin, hemen dönüş yapalım!</p>
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white"
                placeholder="İsminiz *" name="name" value={data.name} onChange={onChangeHandler} />
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white"
                placeholder="Email Adresiniz *" name="mail" value={data.mail} onChange={onChangeHandler} />
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white"
                placeholder="Telefon Numaranız " name="phone" value={data.phone} onChange={onChangeHandler} />
            <textarea type="text" cols={40} rows={5} className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white"
                placeholder="Mesajınız * " name="message" value={data.message} onChange={onChangeHandler} />
            <button className="bg-white text-primary text-base py-3 px-5 font-montserratBold" onClick={onClickHandler}>GÖNDER</button>
        </div>
    )
}

export default Form;    