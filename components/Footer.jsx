import Link from 'next/link'
import data from '../utils/footerLinks.json';
const Footer = () => {
    return (
        <div className="w-full bg-[#211F3B] pt-24 mt-28">
            <div className="max-w-siteWitdh mx-auto">
                <div className="grid grid-cols-4 gap-6">
                    <div className="">
                        <h4 className="text-xl text-white font-montserratBold mb-6">Servislerimiz</h4>
                        <ul>
                            {data.servicesData.map((item) => (
                                <li key={item.id} className="text-white text-base mb-4 opacity-70 transition-all duration-500 hover:opacity-[1] font-montserrat">
                                    <Link href="/servislerimiz">
                                        <a>{item.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-xl text-white font-montserratBold mb-6">Yararlı Linkler</h4>
                        <ul>
                            {data.helpfulLinksData.map((item) => (
                                <li key={item.id} className="text-white text-base mb-4 opacity-70 transition-all duration-500 hover:opacity-[1] font-montserrat">
                                    <Link href={item.link}>
                                        <a>{item.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-xl text-white font-montserratBold mb-6">Son Yazılarımız</h4>
                        <ul>
                            {data.lastBlogsData.map((item) => (
                                <li key={item.id} className="text-white text-base mb-4 opacity-70 transition-all duration-500 hover:opacity-[1] font-montserrat">
                                    <Link href={item.link}>
                                        <a>{item.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h4 className="text-xl text-white font-montserratBold mb-6">Sizi Arayalım!</h4>
                    </div>
                </div>
                <div className="border-t-[1px] border-softGray border-opacity-20 mt-20 pt-5 pb-5 text-center text-white">
                    Copyright © 2022
                    <Link href="/">
                        <a className="text-second "> Axezi Software.</a>
                    </Link>
                    &nbsp;Tüm hakları saklıdır.
                </div>
            </div>
        </div>
    )
}


export default Footer;