import Link from 'next/link'
import Title from '../Title'
import Blog from './Blog';
import data from '../../utils/blogs.json';
const Blogs = () => {
    return (
        <div className="max-w-siteWitdh m-auto mb-12 md:mb-0">
            <div className="flex flex-col px-4 md:px-0 md:flex-row items-center justify-between mt-28">
                <Title title="Blog Yazılarımız" subtitle="Blog" comp="blog" />
                <Link href="/blogs">
                    <a className="uppercase bg-primary py-4 px-5 text-white font-montserratSemibold hover:bg-second transition-all duration-500 inline-block">
                        Tüm Yazılarımız
                    </a>
                </Link>
            </div>
            <div className=" grid grid-cols-1 px-4 gap-4 mt-6 md:mt-16 md:px-0 md:grid-cols-3 md:gap-8">
                {data.blogData.map((item) => (
                    <Blog key={item.id} title={item.title} coverImage={item.coverImage} tag={item.tag} imageWidth={440} imageHeight={330} page="index" />
                ))}
            </div>
        </div>
    )
}

export default Blogs;