import style from './Slogan.module.css'

export default function Slogan ({text}) {

    return (
        <div className={style.slogan}>
            <p className={style.text}>{text}</p>
        </div>
    )
}