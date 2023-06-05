const number = +prompt("Введите число")
console.log(number * 0.1)


const number = +prompt("Введите число")
const number1 = +prompt("Введите число")
if (number >= number1) { console.log(number1) }
else { console.log(number) }


const number = +prompt("Введите число");
if (number < 100) { console.log("Число меньше 100") }
else if (number == 100) { console.log("Число равно 100") }
    else { console.log("Число больше 100") }


const name = prompt("Введите имя");
const age = prompt("Введите возраст (в годах)");
if (age >= 18) {console.log(`Hello, ${name}.`)}
    else {console.log(`Hi, ${name}.`)}