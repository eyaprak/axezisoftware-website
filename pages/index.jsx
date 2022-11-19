import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Services from '../components/Services';
import Works from '../components/Works';
import Tech from '../components/Tech/Tech';
import Blogs from '../components/Blogs';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Web Yazılım ve Tasarım Hizmetleri | Axezi Software</title>
        <meta
          name="description"
          content="Axezisoftware, Axezi Software, Web site tasarımı, Mobil uygulama tasarımı, Web yazılım hizmetleri ve daha bir çok alanda siz müşterilerimize destek sağlamaktayız."
        />

      </Head>
      <Banner />
      <div className="max-w-siteWitdh m-auto">
        <Cards />
        <Services />
      </div>
      <Works />
      <Tech />
      <Blogs />
    </>
  )
}
