import logo from '../media/logo.png'
import din from '../media/din.png'
import style from './Header.module.css'

export default function Header() {

    const text = 'Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.'
    const menu = ['О нас', 'Услуги', 'Аренда']
    return (
        <div className={style.wrapper}>
            <div className={style.header_wrapper}>
                <img src={logo}></img>
                <div className={style.menu}>
                   {menu.map((el, index) => (
                    <div className={style.elmenu} key={index}>
                        <p>{el}</p>
                    </div>
                ))} 
                </div>
                <button>Связаться</button>
            </div>
            <div className={style.head}>
                <div className={style.text}>
                    <h1>Веломастерская “Велозар”</h1>
                    <p>{text}</p>
                </div>
                <img src={din}></img>
            </div>
        </div>
    )
}