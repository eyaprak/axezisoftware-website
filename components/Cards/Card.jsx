import Image from 'next/image'

const Card = ({ text, icon, id }) => {
    return (
        <div className={`flex-1 bg-gradient-to-r relative shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer
        ${id == 1 ? 'from-[#242278] to-[#2A2966]' : id == 2 ? 'from-[#2A2966] to-[#1A5C6E]' : id == 3 ? 'from-[#1A5C6E] to-[#0BA4CD]' : ''} `}>
            <div className="px-12 py-6 text-white text-[26px] font-montserratExtrabold">
                {text}
            </div>
            <div className="absolute top-[-88px] right-[-88px] w-[188px] h-[188px] bg-[rgba(255,255,255,0.2)] rounded-full">
                <div className="absolute left-[45px] bottom-[35px]">
                    <Image src={`/icons/${icon}.svg`} width={38} height={38} />
                </div>
            </div>
        </div>

    )
}

export default Card;