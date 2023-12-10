import s from './Header.module.css'

export default function Header({addTask, handleChange}) {


    return (
        <form className={s.header} onSubmit={(e) => addTask(e)}>
            <div className={s.selects}>
                <select className={s.day}>
                    <option value="option1" name='day'>Выберите день</option>
                    <option value="option2" name='day'>ПН</option>
                    <option value="option3">ВТ</option>
                    <option value="option4">СР</option>
                    <option value="option5">ЧТ</option>
                    <option value="option6">ПТ</option>
                    <option value="option7">СБ</option>
                    <option value="option8">ВС</option>
                </select>

                <select className={s.prioritet}>
                    <option value="option25">Выберите важность</option>
                    <option value="option10">Важно</option>
                    <option value="option11">Не важно</option>
                </select>
            </div>
            <div className={s.subm}>
                <input className={s.task} placeholder='Описание' name='task'></input>
                <button className={s.add}>Добавить</button>
            </div>
        </form>
    )
}