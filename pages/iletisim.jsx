import Breadcrumb from "../components/Breadcrumb";
import Info from "../components/Contact/Info";
import Form from '../components/Contact/Form';
const Iletisim = () => {
    return (
        <>
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