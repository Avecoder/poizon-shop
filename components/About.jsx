import FAQ from './FAQ'
import Image from 'next/image'
import { AnimationText, AnimationImage, AnimationProductsWrap } from './animation'

const About = () => {


    return (
        <>
            {/* overview start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <AnimationText className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                       О нас
                    </AnimationText>
                </div>


                <div className="grid md:grid-cols-3 gap-5 mb-[200px]">
                    <AnimationText className="bg-black md:h-[600px] h-[500px] md:col-start-1 md:col-end-4 relative">
                        <Image
                            layout='fill'
                            objectFit='cover'
                            src={`/about-1.jpg`}
                            alt="about"
                        />
                    </AnimationText>
                    {
                        ['/about-2.png', '/about-3.jpg', '/about-4.jpg'].map(((item, i) => 
                            <AnimationProductsWrap key={i} index={i} noneHover className="bg-black md:h-[300px] h-[500px] relative">
                                <Image
                                    layout='fill'
                                    objectFit='cover'
                                    src={item}
                                    alt="about"
                                />
                            </AnimationProductsWrap>
                        ))
                    }
                    
                </div>


                <div className="grid md:grid-cols-2 gap-16 mb-[200px]">
                    <div className="flex flex-col gap-5">
                        <AnimationText className="font-bold text-2xl">Качество</AnimationText>
                        <AnimationText className="text-lg">Все те оригинальные товары, которые раньше были на полках в магазинах сейчас доступны для онлайн заказа в POIZON.</AnimationText>
                    </div>
                    <div className="flex flex-col gap-5">
                        <AnimationText className="font-bold  text-2xl">Удобство</AnimationText>
                        <AnimationText className="text-lg">Легко заказать - отправить ссылку на товар. Просто получить - курьером до двери. Отследить посылку - можно.
Проверка оригинала - работает. Гарантия - да.</AnimationText>
                    </div>
                </div>

                {/* overview end */}

                {/* overview 2 start */}

                <div className="grid md:grid-cols-2 gap-20 mb-[200px] items-center">
                    <AnimationImage 
                        className="bg-black md:h-[550px] h-[500px] relative"
                        position="left"
                    >
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src={`/about-5.jpg`}
                                alt="about"
                            />
                    </AnimationImage>
                    <div className="flex flex-col gap-10">
                        <AnimationText className="font-bold text-2xl">Poizon delivery ведёт многолетнюю деятельность</AnimationText>
                        <AnimationText>Эффективная помощь нашей команды экспертов в отношении покупки и доставки оригинальной продукции с Poizon / Dewu﻿Мы успешно доставляем товары из Китая на склад, располагаемый в Москве. Ежедневно мы транспортируем большие партии продукции, за счет чего имеем лучшие логистические тарифы и сроки. Мы топовые посредники по доставке товаров в Russia и СНГ.</AnimationText>
                        <button className="w-fit px-20 py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Подробнее</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-20 pb-[100px] items-center">
                    
                    <div className="flex flex-col gap-10">
                        <AnimationText className="font-bold text-2xl">Большой выбор моделей</AnimationText>
                        <AnimationText>Мы быстро и безопасно их выкупаем и доставляем в Россию. С даты оформления, оплаты заказа и до его получения проходит от 12 дней. Все поступающие заказы в Россию мы тщательно проверяем и своевременно отправляем курьером или российскими транспортными компаниями по всей территории РФ. Закажите кроссовки и др. брендовые вещи прямо сейчас. и получите оригинальные вещи в оригинальной упаковке.</AnimationText>
                        <button className="w-fit px-20 py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Подробнее</button>
                    </div>

                    <AnimationImage 
                        className="bg-black md:h-[550px] h-[500px] relative"
                    >
                        <Image
                            layout='fill'
                            objectFit='cover'
                            src={`/about-6.webp`}
                            alt="about"
                        />
                    </AnimationImage>
                </div>        
                

                {/* overview 2 end */}

                {/*faq start */}
                    <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                        <AnimationText className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                            FAQ
                        </AnimationText>
                    </div>
                    <FAQ />
                {/*faq end */}
        </>
    )
}


export default About