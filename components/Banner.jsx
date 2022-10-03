import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full flex justify-center items-center mt-10 bg-[url('/images/banner-background.png')] bg-no-repeat mb-20 bg-right-bottom md:bg-center">
            <div className="max-w-siteWitdh flex flex-col md:flex-row items-center  ">
                <div className="hidden md:inline-block">
                <Image src="/images/leftBannerImage.webp" width={524} height={577} alt="lef-banner" />
                </div>
                <div className=" flex flex-col gap-6 items-center justify-center md:items-start md:justify-start md:ml-24">
                    <p className="font-raleway text-xs md:text-xl text-primary">{'// 1 Yıldan Fazla Tecrübe ile 50+ Müşteriye Hizmet'}</p>
                    <h1 className=" text-4xl text-center md:text-start md:text-7xl font-montserratExtrabold text-primary">
                        Hayalinizdeki <br />Uygulamayı <br />Gerçekleştirelim
                    </h1>
                    <p className="text-[#6d6d6d] text-center">
                        Profesyonel takım arkadaşlarımız ile hayalinizdeki uygulamaları bir yıldan fazladır gerçekleştirmekteyiz.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Banner;