import s from './Triggers.module.css'

export default function Triggers ({chang_to_eng, chang_to_rus }) {
    return (
        <div className={s.triggers}>
            <div onClick={chang_to_eng}>ENG</div>
            <div onClick={chang_to_rus}>RUS</div>
        </div>
    )
}