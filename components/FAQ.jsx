import Faq from 'react-faq-component'
import { AnimationText } from './animation';

const data = {
    rows: [
        {
            title: `Как мне оформить заказ?`,
            content: `<p>Вам нужно заполнить форму заявки - здесь и менеджер poizon delivery свяжется с вами</p>
            <p>Менеджер ответит на вашу заявку в течении 30-ти минут до 2-ух часов, важно указать контакты своих мессенджеров для связи. Если контакты указаны некорректно менеджер не сможет связаться с вами</p>              
            `,
        },
        {
            title: "Как мне оплатить заказ?",
            content:
                "После оформления заявки менеджер свяжется с вами и выдаст реквизиты для оплаты.",
        },
        {
            title: "По какому курсу оплачивать товар?",
            content: `Платформа Poizon Space автоматически конвертирует любую валюту в китайский юань и выкупает ваш товар с poizon. Выкуп происходит в день заказа, поэтому здесь важен момент быстрого реагирования. В связи с этим мы включаем дополнительные комиссии банков за перевод и конвертацию валюты. Курс может отличаться от курса ЦБ и обновляется каждый день`,
        },
        {
            title: "В какие регионы работает доставка Poizon delivery?",
            content: 'Платформа Poizon delivery осуществляет доставку во все регионы РФ, также по 15 городам Казахстана, включая Нур-Султан и Алматы, а также центральные города Белоруссии и Киргизии. Срок доставки в дальние регионы может отличаться от заявленных 10-15 дней. В разработке направления - Украина и Узбекистан. Для более детальной информации связывайтесь с менеджером.',
        },
    ],
};

const styles = {
    bgColor: 'black',
    titleTextColor: "#fff",
    rowTitleColor: "#fff",
    rowContentColor: '#fff',
    arrowColor: "#fff",
    rowContentPaddingTop: "20px",
    rowContentPaddingLeft: "20px",
    rowContentPaddingRight: "20px",
    rowContentPaddingBottom: "30px",
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "-"
    // tabFocus: true   
};

const FAQ = () => {


    return (
        <AnimationText className='pb-[100px] md:px-20'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </AnimationText>
    )


}

export default FAQ