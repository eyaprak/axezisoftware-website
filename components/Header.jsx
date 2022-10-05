import Image from 'next/image'
import Link from 'next/link'
import data from '../utils/menus.json';
import { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);
    const [screenSize, setScreenSize] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const screenSize = window.innerWidth;
        setScreenSize(screenSize);
    }, [])

    return (
        <div className={`pb-4 md:pb-0 z-[1001] transition-all duration-700 ease-in-out ${scrollY > 0 && 'shadow-xl sticky top-0  bg-white bg-opacity-50 backdrop-blur-md'}`}>
            <MobileHeader />
            <div className="max-w-siteWitdh flex-col gap-2 flex md:flex-row flex-auto items-center justify-evenly m-auto">
                <div className="hidden md:inline-block logo-image cursor-pointer">
                    <Link href="/">
                        <a>
                            <Image width={96} height={120} src="/images/axezi_software_logo.webp" alt="Axezi Software Logo" />
                        </a>
                    </Link>
                </div>
                <div className={`flex justify-center flex-auto flex-wrap ${scrollY > 0 && screenSize < 768 ? 'hidden' : ""}`}>
                    <ul className="flex-wrap justify-center main-menu flex gap-3 md:gap-8">
                        {data.menuItems.map((item) => (

                            <li className="text-lg font-montserratBold text-primary  relative group" key={item.id}>
                                <Link href={`${item.url}`}>
                                    <a className={`before:content-[''] before:bg-primary before:ease-in-out before:h-1 before:absolute before:block  before:-bottom-1 before:left-0 
                                    before:transition-all before:duration-500 before:w-0 group-hover:before:!w-full
                                    ${router.pathname === item.url ? "before:w-full" : ''}`} >
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex flex-1 justify-end">
                    <div className="flex items-center gap-3">
                        <a href="https://wa.me/+905364923401" target="_blank" className="flex items-center gap-2" rel="noreferrer noopener">
                            <Image src="/icons/whatsapp-icon.svg" width={44} height={44} alt="whatsapp icon" />
                            <div className="flex flex-col">
                                <span className="text-base font-montserrat">Whatsapp</span>
                                <span className="text-lg text-primary font-semibold">+905364923401</span>
                            </div>
                        </a>
                        <Link href="/iletisim">
                            <a className="px-5 py-3 text-xsm text-white bg-primary font-montserrat font-extralight hover:bg-second transition-all duration-500">Teklif Al</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Header;