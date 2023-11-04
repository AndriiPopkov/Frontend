// 1.
// Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте геттер validPhone,
// которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, 
// геттер validPhone должно принять булевое значение false, в противном случае — true. 
// Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
// Пример значений переменных: 
// let name = "Pizza" 
// let phone = "81234567890" 

// Пример результата: false

class Delivery {
    constructor(name, phone) {
        this.name = name,
        this.phone = phone
    }
    get validPhone() {
        if (this.phone[0] !== '+') {
            return false
        } else {
            return true
        }
    }
}

let name = "Pizza" 
let phone = "81234567890" 

const a = new Delivery(name,phone)
console.log(a.validPhone);

// 2
// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. 
// Создайте новый класс Users, который наследуется от класса Permissions. 
// Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

// Входные данные:
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}

class Users extends Permissions {
    constructor(name) {
        super()
        this.name = name
    }
}

const b = new Users('Andrii')
console.log(b);

// 3
// Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться. 

// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 
// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) 
// в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. 
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount ) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = 100,
        this.type = null
    }
    fix() {
        return this.state * 1.5
    }
    set newState(arg) {
        if (arg < 0) {
            this.state = 0
        } else if (arg > 100) {
            this.state = 100
        } else {
            this.state = arg
        }
    }
    get readState() {
        return this.state
    }
}
// Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), 
// увеличивающий state в полтора раза. Метод не должен принимать аргументов. 

// Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state, 
// принимающий в качестве аргумента новое состояние печатного издания (число). Если новое состояние меньше 0, 
// «сеттер» должен записать в свойство state значение 0. Если новое состояние больше 100, должно быть записано значение 100. 
// В остальных случаях в свойство state записывается переданное в «сеттер» значение. 

// Создайте «геттер», который читает значение свойства state. Создайте класс Magazine, 
// который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, 
// как и класс-родитель. От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine".
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.state = 100,
        this.type = "magazine"
    }
} 

// Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, 
// как и класс-родитель, а также имя автора книги author. Значение свойства type равно "book".
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.author = author,
        this.state = 100,
        this.type = "book"
    }
} 

const f = new Book('Fantas', '14.04.2000', 214, 'Popov')
console.log(f);

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, 
// наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.author = author,
        this.state = 100,
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.author = author,
        this.state = 100,
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
        this.author = author,
        this.state = 100,
        this.type = "detective"
    }
}

const c = new PrintEditionItem('Book', '30.01.1983', 158)
console.log(c);
console.log(c.fix());
c.newState = 147
console.log(c);

// Задача
// Создайте метод, чтобы проверить, написана ли строка ЗАГЛАВНЫМИ БУКВАМИ.
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

const isUppercase = (str) => (str === str.toUpperCase())
console.log(isUppercase('AjD'));

// Задача
// Определите общее количество цифр в целом числе ( n>=0), заданном в качестве входных данных функции. 
// Например, 9 — однозначное число, 66 — 2-значное, а 128685 — 6-значное. 
// Будьте осторожны, чтобы избежать переполнения/недополнения.

const numbers = (num) => (console.log(`${num} - ${num.toString().split('').length}-значное число`))
numbers(15423);

const numbers2 = (num) => {
    let res = []
    let a = num.toString().split('').length
    res.push(num, a)
    console.log(res);
}
numbers2(245965)

// Задача
// Завершите решение так, чтобы строка разбивалась на пары по два символа. 
// Если строка содержит нечетное количество символов, необходимо заменить отсутствующий второй символ последней 
// пары подчеркиванием («_»).

// Примеры:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
let s = 'abcdef'
const resultArray = s.split('').map((el, i) => i % 2 === 0 ? el + (s[i + 1] || '_') : '').filter(el => el !== '');
console.log(resultArray);

// Задача
// Измените kebabize функцию так, чтобы она преобразовывала строку регистра верблюда в регистр кебаба.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Примечания:
// возвращаемая строка должна содержать только строчные буквы

const func4 = (str) => (str.split(/(?=[A-Z])/).map(el => el.toLowerCase()).join('-'))
console.log(func4("camelsHaveHumps"));
console.log(func4("camelsHaveThreeHumps"));
console.log(func4("CAMEL"));

let w = "camelsHave3Humps"
let k = "5256"
console.log(k.split('').filter(el => typeof el !== 'number'));
// console.log(typeof k);