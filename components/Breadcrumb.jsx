import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ title, naviText, link }) => {
    return (
        <div className="w-full py-16 bg-primary relative">
            <div className="absolute top-0 left-0 bg-cover w-full h-full opacity-50">
                <Image src="/images/breadcrumb-bg.png" layout="fill" objectFit="cover" alt="breadcrumb bg" />
            </div>
            <div className="max-w-siteWitdh m-auto z-up">
                <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between ">
                    <h1 className="text-white font-montserratBold text-4xl md:text-5xl z-up">
                        {title}
                    </h1>
                    <div className="flex items-center gap-2 font-montserratSemibold text-white text-xs z-up">
                        <Link href="/">
                            <a>ANASAYFA</a>
                        </Link>
                        <Image src="/icons/navigation-arrow.svg" width={7} height={7} alt="navigation-arrow" />
                        <Link href={link}>
                            <a className="uppercase">{naviText}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Breadcrumb;