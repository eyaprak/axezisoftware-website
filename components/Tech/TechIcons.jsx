import Image from 'next/image'
const TechIcons = ({ icon }) => {
    return (
        <div className="border-[1px] border-softGray border-opacity-20 p-4 flex justify-center items-center
        cursor-pointer transition-all duration-500 hover:bg-primary">
            <Image src={icon} width={80} height={80} alt="tech icons" />
        </div>
    )
}

export default TechIcons;