import Image from 'next/image';
import Link from 'next/link';
import Title from '../Title'
import TechIcons from './TechIcons';
import data from '../../utils/techicons.json'
const Tech = () => {
    return (
        <div className="bg-[#211F3B] w-full py-24 flex items-center justify-center">
            <div className="max-w-siteWitdh w-full flex flex-col md:flex-row justify-between">
                <div className="flex-1 order-2 px-4 md:px-0 md:order-1">
                    <Title title="Sizde Hayalinizde Uygulamaya Sahip Olun" subtitle="TECRÜBE. SIKI ÇALIŞMA. MÜKEMMELLİK." comp="tech" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {data.techIconsData.map((item) => (
                            <TechIcons key={item.id} icon={item.icon} />
                        ))}
                    </div>
                    <p className="mt-8 text-white font-montserrat">
                        React.js, Vue.js, Next.js, Nuxt.js, Node.js, MongoDB gibi bir çok yeni teknoloji ile sizlere web uygulamaları hizmetleri sunmatkayız.
                        Sizlerde kaliteli web uygulamaları yaptırmak ve google üzerinde üst sıralarda yerinizi almak istiyorsanız hemen iletişime geçin.
                    </p>
                    <Link href="/iletisim">
                        <a className="mt-16  bg-second padding px-4 py-6 text-white font-montserratSemibold inline-flex items-center gap-2">
                            <Image src="/icons/tech/arrow.svg" width={20} height={20} alt="arrow icon" />
                            ŞİMDİ İLETİŞİME GEÇİN
                        </a>
                    </Link>
                </div>
                <div className="flex-1 order-1 px-4 md:order-2 md:px-0">
                    <Image src="/images/tech/our-technologies-bg.png" width={640} height={750} objectFit="cover" alt="background image" />
                </div>
            </div>
        </div>
    )
}


export default Tech;