import Breadcrumb from "../components/Breadcrumb";
import Info from "../components/Contact/Info";
import Form from '../components/Contact/Form';
import Head from 'next/head';
const Iletisim = () => {
    return (
        <>
            <Head>
                <title>İletişim | Axezi Software</title>
                <meta
                    name="description"
                    content="Hayalinizdeki web/mobil uygulamalarınızı hayata geçirmek için Axezi Software firmasıyla iletişime geçin. İndirimli fırsatları kaçırmayın!"
                />
            </Head>
            <Breadcrumb title="İletişim" naviText="İLETİŞİM" link="/iletisim" />
            <div className="max-w-siteWitdh mx-auto mt-12 md:my-28 ">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 px-4 md:px-0">
                        <Info />
                    </div>
                    <div className="flex-1">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Iletisim;