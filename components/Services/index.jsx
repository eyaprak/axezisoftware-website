import Title from '../Title';
import Service from './Service';
import data from '../../utils/services.json';

const Services = () => {
    return (
        <>
            <Title subtitle="SERVİSLERİMİZ" title="Sizlere Özel Hizmetlerimiz"></Title>
            <div className="grid grid-cols-1 gap-4 px-4 md:px-0 md:grid-cols-3 md:gap-10">
                {data.servicesData.map((item) => (
                    <Service title={item.title} text={item.text} icon={item.icon} bgUrl={item.bgUrl } key={item.id} />
                ))}
            </div>
        </>
    )
}

export default Services;