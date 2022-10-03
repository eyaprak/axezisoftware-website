import Link from 'next/link'
import Title from '../Title'
import Blog from './Blog';
import data from '../../utils/blogs.json';
const Blogs = () => {
    return (
        <div className="max-w-siteWitdh m-auto">
            <div className="flex items-center justify-between mt-28">
                <Title title="Blog Yazılarımız" subtitle="Blog" comp="blog" />
                <Link href="/blog">
                    <a className="uppercase bg-primary py-4 px-5 text-white font-montserratSemibold ">
                        Tüm Yazılarımız
                    </a>
                </Link>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
                {data.blogData.map((item) => (
                    <Blog key={item.id} title={item.title} coverImage={item.coverImage} tag={item.tag} />
                ))}
            </div>
        </div>
    )
}

export default Blogs;