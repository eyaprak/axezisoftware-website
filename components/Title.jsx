

const Title = ({ title, subtitle, comp }) => {
    return (
        <div className={`flex flex-col justify-center items-center gap-2 text-center mt-28 mb-11
        ${comp && comp === "tech"  ? '!items-start mt-12' : comp === "blog" && '!items-start mt-0 mb-0' }`}>
            <p className={`text-second text-base font-montserratSemibold uppercase 
            ${comp && comp === "tech" ? 'text-[#8E88B8] !text-left' :'!text-left'}
            `}
            >// {subtitle}</p>
            <h1 className={`text-5xl text-center text-primary font-montserratExtrabold capitalize max-w-[350px] leading-[55px]
            ${comp && comp === "tech" ? '!text-white !text-left max-w-none': "!text-left max-w-none"}
            `}
            > {title}</h1 >
        </div >
    )
}


export default Title;