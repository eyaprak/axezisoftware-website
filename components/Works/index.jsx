import Work from './Work';
import Title from '../Title';
import data from '../../utils/works.json';
const Works = () => {
    return (
        <div className="w-full bg-containerBg pt-4 mt-28">
            <Title title="Nasıl Çalışıyoruz?" subtitle="YAPIM AŞAMASI" />
            <div className="px-8 grid grid-cols-5 min-h-[550px] gap-6">
                {data.worksData.map((item) => (
                    <Work title={item.title} text={item.text} icon={item.icon} bgUrl={item.bgUrl} id={item.id} key={item.id} />
                ))}
            </div>
        </div>
    )
}



export default Works;
