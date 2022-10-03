

const Form = () =>{
    return (
        <div className="bg-gradient-to-r from-primary to-second py-20 px-12 flex flex-col gap-6 items-start">
            <h2 className="font-montserratBold text-4xl text-white">Fiyat Teklifi Al</h2>
            <p className="font-montserrat text-white mb-6 text-sm">İstediğiniz Hizmet için bizlerle şimdi iletişime geçin, hemen dönüş yapalım!</p>
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white" placeholder="İsminiz *" />
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white" placeholder="Email Adresiniz *" />
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white" placeholder="Telefon Numaranız " />
            <textarea type="text" cols={40} rows={5} className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white" placeholder="Mesajınız * " />
            <button className="bg-white text-primary text-base py-3 px-5 font-montserratBold">GÖNDER</button>
        </div>
    )
}

export default Form;    