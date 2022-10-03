import Image from 'next/image'

const Service = ({ title, text, icon, bgUrl }) => {
    return (
        <div
            className="relative border-[1px] border-gray shadow-sm group cursor-pointer">
            <div className="bg-cover h-full w-0 group-hover:w-full group-hover:h-full
            absolute left-0 top-0 opacity-0  group-hover:!opacity-[1] transition-all duration-700"
            >
                <Image src={bgUrl} layout='fill' objectFit="cover" />
            </div>
            <div className="px-14 py-11 flex flex-col items-center text-center">
                <Image src={`/icons/${icon}.svg`} width={80} height={80} className="group-hover:invert group-hover:brightness-0 duration:700" />
                <h1 className="text-2xl text-primary font-montserratSemibold mt-8 group-hover:text-white z-up duration-1000">{title}</h1>
                <p className="text-grayText mt-2 px-4 group-hover:text-white z-up duration-1000">{text}</p>
            </div>
        </div >
    )
}




export default Service;