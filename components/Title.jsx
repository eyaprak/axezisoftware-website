

const Title = ({ title, subtitle, comp }) => {
    return (
        <div className={`flex flex-col justify-center items-center gap-2 text-center mt-12 md:mt-28 mb-11
        ${comp === "tech" ? '!items-start mt-12' : comp === "blog" ? 'items-center md:!items-start !mt-0 !mb-0' : ''}`}>
            <p className={`text-second text-base font-montserratSemibold uppercase 
            ${comp === "tech" ? 'text-[#8E88B8] !text-left' : comp === "blog" && '!text-center md:!text-left'}
            `}
            > {'// ' + subtitle}</p>
            <h1 className={`text-4xl text-center block md:text-start md:text-5xl text-primary font-montserratExtrabold capitalize !max-w-none md:max-w-[350px] leading-[55px]
            ${comp === "tech" ? '!text-white !text-left !max-w-none' : comp === "blog" ? "text-center md:!text-left md:!max-w-none" : comp === "servislerimiz" && '!max-w-[635px]'}
            `}
            > {title}</h1 >
        </div >
    )
}


export default Title;