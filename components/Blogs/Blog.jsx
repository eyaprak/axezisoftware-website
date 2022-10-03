import Image from "next/image";
import Link from 'next/link'
const Blog = ({ title, coverImage, tag }) => {
    return (
        <div className="border-[1px] border-gray flex items-start flex-col cursor-pointer transition-all duration-500 hover:shadow-lg">
            <Image src={coverImage} width={440} height={330} objectFit="cover" />
            <span className="bg-primary py-2 px-3 text-white font-montserratSemibold text-sm ml-8 -mt-4 z-up uppercase">
                {tag}
            </span>
            <div className="p-10 flex flex-col">
                <h4 className="font-montserratExtrabold text-3xl">
                    {title}
                </h4>
                <Link href="/blog/1">
                    <a className="flex items-center gap-2 font-montserrat mt-4" >
                        <Image src="/icons/tech/arrow.svg" width={20} height={20} style={{ filter: ' brightness(0)' }} />
                        <span className="">
                            Devamını Oku
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    )
}


export default Blog;