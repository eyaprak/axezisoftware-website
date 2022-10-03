import Image from 'next/image'
import Link from 'next/link'
import data from '../utils/menus.json';
const Header = () => {
    return (
        <div className="border-b-[1px] border-[#ccc]">
            <div className="max-w-siteWitdh flex items-center justify-evenly m-auto">
                <div className="logo-image">
                    <Image width={96} height={120} src="/images/axezi_software_logo.webp" />
                </div>
                <div className="flex justify-center flex-auto">
                    <ul className="main-menu flex gap-8">
                        {data.menuItems.map((item) => (

                            <li className="text-lg font-montserratBold text-primary" key={item.id}>
                                <Link href={`${item.url}`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="flex items-center gap-6">
                        <a href="https://wa.me/+905364923401" target="_blank" className="flex items-center gap-2">
                            <Image src="/icons/whatsapp-icon.svg" width={44} height={44} />
                            <div className="flex flex-col">
                                <span className="text-base font-montserrat">Whatsapp</span>
                                <span className="text-lg text-primary font-semibold">+905364923401</span>
                            </div>
                        </a>
                        <Link href="/teklif-al">
                            <a className="px-5 py-3 text-base text-white bg-primary font-montserrat font-extralight">Teklif Al</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Header;