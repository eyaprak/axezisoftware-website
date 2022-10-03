import data from '../../utils/blogs.json';
import slugify from 'slugify';
import Breadcrumb from '../../components/Breadcrumb';
import Image from 'next/image'
export const getStaticPaths = () => {

    const newArray = data.blogData.map((item) => {
        item.slug = slugify(item.title).toLowerCase()
        return item;
    })

    const paths = newArray.map((item) => {
        return {
            params: {
                slug: item.slug.toString()
            }
        }
    });

    return {
        paths,
        fallback: false,
    }
}



export const getStaticProps = (context) => {
    const newArray = data.blogData.map((item) => {
        item.slug = slugify(item.title).toLowerCase();
        return item;
    });
    const slug = context.params.slug;
    const blog = newArray.filter((item) => item.slug === slug);
    return {
        props: {
            blog: blog[0]
        }
    }
}


const SingleBlog = ({ blog }) => {
    return (
        <>
            <Breadcrumb title={blog.title} naviText="YAZILARIMIZ" link="blogs" />
            <div className="max-w-siteWitdh mx-auto my-14 px-4 md:px-0">
                <div className="relative w-full h-full min-h-[400px] md:min-h-[620px]">
                    <Image src={blog.coverImage} layout="fill" objectFit="cover" alt="blog image"/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.description }} className="mt-6 font-montserrat" />
            </div>
        </>
    )
}

export default SingleBlog;
