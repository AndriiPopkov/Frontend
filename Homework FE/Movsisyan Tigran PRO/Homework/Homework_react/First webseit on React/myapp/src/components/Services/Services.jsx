import style from './Services.module.css'

export default function Services() {

    const data = [
        { backgroundColor: '#22356F', text: 'Годовое ТО' },
        { backgroundColor: '#0052C1', text: 'Выравнивание колес' },
        { backgroundColor: '#76B58B', text: 'Настройка переключателей' },
    ]

    return (
        <div className={style.services}>
            {data.map((el, index) => (
                <div className={style.el} key={index} style={{ backgroundColor: el.backgroundColor}}>
                    <div className={style.boxbottom}></div>
                    <p>{el.text}</p>
                </div>
            ))}
        </div>
    )
}