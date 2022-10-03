import Image from "next/image";
import Link from "next/link";
import slugify from 'slugify';

const Project = ({ id, name, category, image }) => {
    return (
        <div className="border-[1px] border-softGray hover:shadow-md transition-all duration-500 overflow-hidden w-full relative group">
            <Link href={`/projeler/${slugify(name).toLowerCase()}`}>
                <a className="flex items-center justify-center">
                    <Image src={image} width={420} height={300} objectFit="cover" className="object-top group-hover:scale-105 transition-all duration-500"
                        alt={name} />
                    <div className="absolute bottom-0 bg-primary py-6 px-6 w-80 max-w-[80%] flex flex-col items-center justify-center gap-2
                    transitio-all duration-500 translate-y-5 opacity-0 group-hover:opacity-[1] group-hover:translate-y-0">
                        <h4 className="font-montserratBold text-xl text-white">{name}</h4>
                        <span className="text-gray font-montserrat uppercase text-sm">{category}</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Project;