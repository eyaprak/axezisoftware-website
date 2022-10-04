import Breadcrumb from "../components/Breadcrumb";
import Link from 'next/link'
import Image from 'next/image'
import Services from '../components/Services'
import Cards from '../components/Cards'
import Head from 'next/head';
const Servislerimiz = () => {
    return (
        <>
            <Head>
                <title>Servislerimiz | Axezi Software</title>
                <meta
                    name="description"
                    content="Blockhain programlama, web yazılım, UI/UX dizayn, E-Ticaret Web Hizmeti, SEO ve Reklam Hizmeti ve daha bir çok hizmet Axezi Software'de."
                />
            </Head>
            <Breadcrumb title="Servislerimiz" naviText="SERVİSLERİMİZ" link="/servislerimiz" />
            <div className="max-w-siteWitdh m-auto">
                <Services />
                <div className="py-12 md:py-24">
                    <Cards />
                </div>
            </div>
            <div className="w-full relative bg-cover bg-no-repeat bg-[url('/images/services-bg.jpg')] bg-bottom py-48 flex flex-col items-center justify-center px-4  md:px-0">
                <div className='flex flex-col justify-center items-center gap-2 text-center '>
                    <p className='text-white font-montserratSemibold uppercase text-sm md:text-base'
                    >{'// Aklınızda bir uygulama fikri mi var?'}</p>
                    <h1 className='text-5xl md:text-7xl text-center text-white font-montserratExtrabold capitalize  mt-4 leading-[55px]'
                    > FİYAT TEKLİFİ ALMAK İÇİN</h1 >
                </div>
                <Link href="/iletisim">
                    <a className="text-white bg-primary px-6 py-6 inline-flex mt-10 gap-2 hover:bg-second transition-all duration-500" >
                        <Image src="/icons/tech/arrow.svg" width={20} height={20} alt="arrow icon" />
                        ŞİMDİ İLETİŞİME GEÇİN
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Servislerimiz;