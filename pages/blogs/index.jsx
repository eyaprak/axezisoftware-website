import data from '../../utils/blogs.json'
import Blog from '../../components/Blogs/Blog';
import Breadcrumb from '../../components/Breadcrumb';
import Title from '../../components/Title';
import Head from 'next/head';

export const getStaticProps = () => {
    return {
        props: {
            blogsData: data.blogData
        }
    }
}

const Blogs = ({ blogsData }) => {
    return (
        <>
            <Head>
                <title>Yazılarımız | Axezi Software</title>
                <meta
                    name="description"
                    content="Axezi Software olarak sizler için yazdığımız yararlı blog içerikleri burada. Sizde web tasarım hizmetleri, blockchain yazılım ve google reklam verme hizmeti hakkında bilgi almak isterseniz hemen tıklayın!"
                />
            </Head>
            <Breadcrumb title="Yazılarımız" naviText="YAZILARIMIZ" link="/blogs" />
            <div className="max-w-siteWitdh mx-auto mt-12 mb-20  md:my-20">
                <Title title="YAZILARIMIZ" subtitle="SON VE GÜNCEL" comp="servislerimiz" />
                <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-3 gap-4">
                    {blogsData.map((item) => (
                        <Blog key={item.id} title={item.title} coverImage={item.coverImage} tag={item.tag} imageHeight={400} imageWidth={660} description={item.description} />
                    ))}
                </div>
            </div>
        </>
    )
}


export default Blogs;