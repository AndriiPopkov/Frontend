import style from './Rental.module.css'
import rentalImage from '../media/rental.png'

export default function Rental() {
    const text = 'У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!'

    return (
        <div className={style.rental}>
            <img src={rentalImage}></img>
            <div className={style.text}>
                <p>Прокат велосипедов</p>
                <p>{text}</p>
            </div>
        </div>
    )
}



