import Image from 'next/image'
const Work = ({ title, text, icon, bgUrl, id }) => {
    return (
        <div
            className='border-[1px] border-gray p-10 flex flex-col items-center 
            text-center h-[235px] hover:h-[320px] group transition-all duration-500 cursor-pointer ease-in-out relative'>
            <div className="bg-cover h-full w-0 group-hover:w-full group-hover:h-full
            absolute left-0 top-0 opacity-0 group-hover:!opacity-[1] transition-all duration-1000"
            >
                <Image src={bgUrl} layout='fill' objectFit="cover" />
            </div>
            <span className="absolute top-2 right-4 z-up text-[#0000001a] text-7xl font-montserratSemibold">0{id}</span>
            <Image src={icon} width={100} height={100} />
            <h4 className="pt-4 text-2xl font-montserratBold group-hover:!text-white z-up duration-700 uppercase">{title}</h4>
            <p className="pt-1 -translate-y-10 max-h-0 opacity-0 m-h-0 group-hover:translate-y-0  group-hover:!opacity-[1] transition-all duration-700
            group-hover:!text-white z-up">
                {text}
            </p>
        </div>
    )
}

export default Work;
