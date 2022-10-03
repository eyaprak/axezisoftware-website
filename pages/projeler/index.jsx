import Breadcrumb from "../../components/Breadcrumb";
import Project from "../../components/Projects/Project.jsx";
import Title from "../../components/Title";
import data from '../../utils/projects.json';

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