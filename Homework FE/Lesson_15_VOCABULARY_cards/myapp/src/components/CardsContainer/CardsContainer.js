import CardItem from "../CardItem/CardItem";
import s from './CardsContainer.module.css'

export default function CardsContainer ({words_data, chang_card}) {
    return (
        <div className={s.cont}>
            {words_data.map(el => <CardItem chang_card={chang_card} key={el.id} eng={el.eng} {...el}/>)}
        </div> 
    )
}

