import style from './CardItem.module.css'

export default function CardItem ({id, rus, eng, language, chang_card}) {

    const textLang = language === 'en' ? eng : rus

    const card_styles = {
        backgroundColor: language === 'en' ? '#2980B9' : 'white',
        color: language === 'en' ? 'white' : '#2980B9'
    }


    return (
        <div onClick={chang_card} className={style.cardItem} style={card_styles}>
            <p>{textLang}</p>
        </div>
    )
}



// className={[s.card_item, language === 'en' ? s.eng : s.rus].join(' ')}

// className={`${s.card_item} ${language === 'en' ? s.eng : s.rus}`}