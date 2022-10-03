

const CallForm = () => {
    return (
        <div className="flex flex-col gap-4 items-center md:items-start mx-4 md:mx-0">
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white" placeholder="İsminiz *" />
            <input type="text" className="bg-formBg text-white py-4 px-6 w-full focus:outline-none placeholder:text-white" placeholder="Telefon Numaranız*" />
            <button href='/' className="bg-second text-white text-base py-3 px-5 font-montserratBold">GÖNDER</button>
        </div>
    )
}

export default CallForm;