import Image from 'next/image';
const Techs = ({ name, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 shadow-xl
        px-4 py-4 mt-6 border-[1px] border-primary hover:-translate-y-2 transition-all duration-500">
            <Image src={icon} width={80} height={80} alt="card icon" />
            <h4 className="text-primary font-4xl font-montserratSemibold">
                {name}
            </h4>
        </div>
    )
}

export default Techs;