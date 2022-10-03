import Banner from '../components/Banner';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Services from '../components/Services';
import Works from '../components/Works';
import Tech from '../components/Tech/Tech';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
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
