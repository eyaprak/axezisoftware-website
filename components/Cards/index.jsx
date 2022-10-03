import Card from './Card';

const Cards = () => {
    return (
        <div className="flex flex-col mx-4 md:mx-0 md:flex-row gap-6">
            <Card text="Kişiye Özel Yazılım Geliştirme" icon="code-icon" from="#242278" to="#2A2966" id="1" />
            <Card text="Yazılım Desteği Sağlama" icon="support-icon" from="#2A2966" to="#1A5C6E" id="2" />
            <Card text="100% Müşteri Memnuniyeti" icon="reward-icon" from="#1A5C6E" to="#0BA4CD" id="3" />
        </div>
    )
}

export default Cards;