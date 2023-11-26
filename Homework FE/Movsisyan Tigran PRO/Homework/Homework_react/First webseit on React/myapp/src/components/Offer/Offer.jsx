import style from './Offer.module.css'
import offerImage from '../media/offer.png'

export default function Offer() {
    const text = 'В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.'

    return (
        <div className={style.offer}>
            <div className={style.text}>
                <h2>Что мы предлагаем</h2>
                <p>{text}</p>
            </div>
            <img src={offerImage}></img>
        </div>
    )
}



