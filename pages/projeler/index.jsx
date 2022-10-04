import Breadcrumb from "../../components/Breadcrumb";
import Project from "../../components/Projects/Project.jsx";
import Title from "../../components/Title";
import data from '../../utils/projects.json';
import Head from 'next/head';
export const getStaticProps = () => {
    return {
        props: {
            projects: data.projelerData
        }
    }
}

const Projelerimiz = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Projeler | Axezi Software</title>
                <meta
                    name="description"
                    content="Müşterilerimiz için yaptığımız çalışmalar. Wordpress web hizmeti, özel website yazılımları ve daha fazlası burada."
                />
            </Head>
            <Breadcrumb title="Projelerimiz" naviText="PROJELERİMİZ" link="/projeler" />
            <div className="max-w-siteWitdh mx-auto">
                <Title title="Yaptığımız Projeler" subtitle="SON ÇALIŞMALAR" comp="servislerimiz" />
                <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-10 mt-4 md:mt-16 mb-32">
                    {projects.map((item) => (
                        <Project key={item.id} id={item.id} name={item.name} category={item.category} image={item.image} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projelerimiz;