import Title from '../Title'
import Image from 'next/image'
const Info = () => {
    return (
        <>
            <Title title="BİZİMLE İLETİŞİME GEÇİN" subtitle="İLETİŞİM BİLGİLERİMİZ" comp="blog" />
            <div className="flex flex-col">
                <div className="flex gap-2 mt-4 md:mt-10 items-center hover:shadow-xl cursor-pointer transition-all duration-500 py-6 px-4">
                    <Image src="/icons/contact/contact-map-icon.svg" width={30} height={30} alt="harita icon"/>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-montserratBold text-primary">Adresimiz:</h4>
                        <a className="font-montserrat" target="_blank" rel='noreferrer noopener'
                            href="https://www.google.com/maps/place/Axezi+Software/@41.0549251,28.9092554,15z/data=!4m2!3m1!1s0x0:0x643e408e2524917e?sa=X&ved=2ahUKEwiBpPPkyMP6AhVVSvEDHQpsAIcQ_BJ6BAg9ECE">
                            Muratpaşa, Cumhuriyet Cd. 1. Sok D:No:3b, 34040 Bayrampaşa/İstanbul
                        </a>
                    </div>
                </div>
                <div className="flex gap-2 mt-2 items-center hover:shadow-xl cursor-pointer transition-all duration-500 py-6 px-4">
                    <Image src="/icons/contact/contact-mail-icon.svg" width={30} height={30} alt="mail icon" />
                    <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-montserratBold text-primary">Mail Adresimiz:</h4>
                        <a href="mailto:info@axezisoftware.com" className="font-montserrat">info@axezisoftware.com</a>
                    </div>
                </div>
                <div className="flex gap-2 mt-2 items-center hover:shadow-xl cursor-pointer transition-all duration-500 py-6 px-4">
                    <Image src="/icons/contact/contact-phone-icon.svg" width={30} height={30} alt="telefon icon"/>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-montserratBold text-primary">Telefon/Whatsapp Hattımız:</h4>
                        <a href="https://wa.me/+905364923401" className="font-montserrat" target="_blank" rel='noreferrer noopener'>+90 536 492 3401</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info;