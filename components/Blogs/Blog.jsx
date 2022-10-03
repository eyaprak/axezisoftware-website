import Image from "next/image";
import Link from 'next/link';
import slugify from "slugify";
const Blog = ({ title, coverImage, tag, imageWidth, imageHeight, page, description }) => {
    return (
        <div className={`border-[1px] border-gray flex items-start flex-col cursor-pointer transition-all duration-500 hover:shadow-lg ${page && 'mb-4 md:mb-28'}`}>
            <div className="relative w-full ">
                <Image src={coverImage} width={imageWidth} height={imageHeight} objectFit="cover" alt={title} />
            </div>
            <span className="bg-primary py-2 px-3 text-white font-montserratSemibold text-sm ml-8 -mt-4 z-up uppercase">
                {tag}
            </span>
            <div className="p-6 md:p-10 flex flex-col">
                <Link href={`/blogs/${slugify(title).toLowerCase()}`}>
                    <a>
                        <h4 className="font-montserratExtrabold text-3xl">
                            {title}
                        </h4>
                        {description && (
                            <div dangerouslySetInnerHTML={{ __html: description.substring(0, 100) + '...' }} />
                        )}
                        <div className="flex items-center gap-2 font-montserrat mt-4">
                            <Image src="/icons/tech/arrow.svg" width={20} height={20} style={{ filter: 'brightness(0)' }} alt="arrow-icon" />
                            <span className="">
                                Devamını Oku
                            </span>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}


export default Blog;