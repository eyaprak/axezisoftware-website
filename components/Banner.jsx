import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full flex justify-center items-center mt-10 bg-[url('/images/banner-background.png')] bg-no-repeat mb-20">
            <div className="max-w-siteWitdh flex items-center ">
                <Image src="/images/leftBannerImage.webp" width={524} height={577} />
                <div className=" flex flex-col gap-6 ml-36">
                    <p className="font-raleway text-xl text-primary">// 1 Yıldan Fazla Tecrübe ile 50+ Müşteriye Hizmet</p>
                    <h1 className="text-7xl font-montserratExtrabold text-primary">
                        Hayalinizdeki <br />Uygulamayı <br />Gerçekleştirelim
                    </h1>
                    <p className="text-[#6d6d6d]">
                        Profesyonel takım arkadaşlarımız ile hayalinizdeki uygulamaları <br />bir yıldan fazladır gerçekleştirmekteyiz.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Banner;