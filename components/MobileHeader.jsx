import Link from 'next/link';
import Image from 'next/image';
const MobileHeader = () => {
    return (
        <>
            <div className="flex md:hidden justify-center items-center gap-6">
                <a href="https://wa.me/+905364923401" target="_blank" className="flex items-center gap-2" rel="noreferrer noopener">
                    <div className="flex flex-col items-center">
                        <Image src="/icons/whatsapp-icon.svg" width={33} height={33} className="mb-2" alt="whatsapp icon" />
                        <span className="text-xs font-montserrat">Whatsapp</span>
                        <span className="text-sm text-primary font-semibold">+905364923401</span>
                    </div>
                </a>

                <Link href="/">
                    <Image width={75} height={100} src="/images/axezi_software_logo.webp" alt="Axezi Software Logo"/>
                </Link>

                <Link href="/iletisim">
                    <a className="px-4 py-3 text-base text-white bg-primary font-montserrat font-extralight hover:bg-second transition-all duration-500">Teklif Al</a>
                </Link>

            </div>
        </>
    )
}

export default MobileHeader;