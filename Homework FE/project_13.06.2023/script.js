// Задача 1.
// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// const num1 = +prompt("Введите число")
// const num2 = +prompt("Введите число")
//     function min(num1, num2) {
//         if (num1 <= num2) {return num1}
//         else {return num2}     
//     }
// const result = min(num1, num2)
// console.log(result) 

// Задача 2. 
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// const a = +prompt("Введите число")
// const b = +prompt("Введите число")
// function printEvenNumbers(a, b) {
//     let start = Math.max(a, b);
//     let end = Math.min(a, b);
//     for (let i = start; i >= end; i--) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
//   printEvenNumbers(a, b)

// Задача 3. 
// Напишите функцию power, которая принимает два числовых аргумента(основание степени и саму степень) и возвращает число в указанной степени.Значение степени должно быть указано по умолчанию 2.
// const a = +prompt("Введите число")
// function power(a, b = 2) {
//     let result = Math.pow(a, b)
//     console.log(result)
// }
// power(a)

// Задача 4.
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function calcSum(b) {
//     let sum = 0
//     for (let i = 0; i <= b; i++) {
//         sum += i
//     }
//     console.log(sum)
// }
// calcSum(4)

// Задача 5.
// Напишите функцию, которая принимает два числовых аргумента n и m 
// и считает сумму четных чисел и нечетных чисел от n до m.
// Суммы выведите в консоль(в начале сумму четных чисел, а затем сумму нечетных).
    // function calcSum(n, m) {
    //     let evenSum = 0
    //     let oddSum = 0
    //     for (let i = n; i <= m; i++) {
    //         if (i % 2 === 0) {
    //         evenSum += i  
    //         }
    //         else {oddSum += i}
    //     }
    //     console.log(evenSum)
    //     console.log(oddSum)
    // }
    // calcSum(1, 5)

// Задача 6.
// Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. Если входной массив пуст, 
// функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'
// const strings = ['one', 'two', 'three', 'findLongestString4', 'findLongestString5', 'to']
// const result = findLongestString(strings)
// function findLongestString(strings) {
//     if (strings.length === 0) {
//     return null}
//     let longestString = strings[0]
//     for (let i = 1; i < strings.length; i++) {
//       if (strings[i].length > longestString.length) {
//         longestString = strings[i]
//       }
//     }
//     return longestString;
//   }
// console.log(result)