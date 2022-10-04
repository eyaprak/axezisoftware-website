
import data from '../../utils/projects.json'
import slugify from 'slugify';
import Breadcrumb from '../../components/Breadcrumb';
import Tech from '../../components/Projects/Card';
import Image from 'next/image';
import Link from 'next/link';
export const getStaticPaths = () => {

    const newArray = data.projelerData.map((item) => {
        item.slug = slugify(item.name).toLowerCase()
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

    const newArray = data.projelerData.map((item) => {
        item.slug = slugify(item.name).toLowerCase()
        return item;
    })

    const slug = context.params.slug;

    const filteredData = newArray.filter((item) => item.slug === slug);

    return {
        props: {
            project: filteredData[0]
        }
    }

}

const Proje = ({ project }) => {
    return (
        <>
            <Breadcrumb title={project.name} naviText='PROJELERİMİZ' link='/projeler' />
            <div className='max-w-siteWitdh mx-auto py-20 px-4'>
                <div className='border-[1px] border-softGray w-auto min-h-[750px] md:min-h-[2560px] h-full relative group hover:-translate-y-2 transition-all duration-500 cursor-pointer'>
                    <a href={project.url} target='_blank' rel='noopener noreferrer'>
                        <Image src={project.image} layout='fill' objectFit='contain' className='object-top grayscale 
                    group-hover:grayscale-0 transition-all duration-500' alt='proje image'/>
                    </a>
                </div>
                <h4 className='text-4xl mt-16 font-montserratBold text-primary'>{project.title}</h4>
                <div className='flex items-start mt-10 gap-2 box-border basis-10'>
                    <span className='border-[1px] border-softGray px-3 py-2 font-montserratBold text-xl'>{project.description.charAt(0)}</span>
                    <p className='pt-0 mt-0 font-montserrat text-base'>{project.description.substring(1)}</p>
                </div>
                {project.comment && (
                    <div className='mt-6 flex items-start basis-10 gap-4'>
                        <Image src='/icons/projects/quote-icon.svg' width={40} height={40} objectFit='cover' alt='quote image'/>

                        <div className='flex flex-col gap-4'>
                            <span className='text-2xl font-montserratSemibold'>'{project.comment}'</span>
                            <span className='font-montserratSemibold text-grayText'>- {project.commenter}</span>
                        </div>
                    </div>
                )}
                <Link href='/iletisim'>
                    <a className='bg-primary text-white px-6 py-4 inline-block mt-6 hover:bg-second transition-all duration-500'>Fiyat Teklifi Al</a>
                </Link>
                <h4 className='text-4xl mt-10 font-montserratBold text-primary'>Kullanılan Teknolojiler</h4>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-0 md:mt-6'>
                    {project.techs.map((item) => (
                        <Tech key={item.id} name={item.name} icon={item.icon} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Proje;