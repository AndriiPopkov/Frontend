// 1. Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

// function checkDate() {
//     let num = new Date()
//     num.setMonth(num.getDate() + 1, 1);
//     num.setDate(num.getDate() - 1)
//     const res = num.getDate() - new Date().getDate()
//     console.log('до конца месяца осталось - ' + res + ' дней');
// }
// checkDate();

// 2.
// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

// function isItFridayToday() {
//     let num = new Date()
//     let day = num.getDay()
//     console.log(day);
//     if (day === 5) {
//         console.log('Сегодня пятница');
//     } else if (day === 6) {
//         console.log('Вчера была пятница');
//     } else if (day === 4) {
//         console.log('Завтра будет пятница');
//     } else {
//         const res = 4 - day
//         const daysWord = res === 1 ? 'день' : 'дней'
//         console.log('Пятница будет через ' + res + ' ' + daysWord);
//     }
// }
// isItFridayToday()

// 3.
// Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), 
// которая получает массив и возвращает количество элементов, 
// которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива 
// по примеру:

// Пример:
let prices = [ 
'Цена товара - 1200$', 
'Стоимость - 500$', 
'Цена не определена', '9999',
'Ценовая категория - больше 300$',
'Цена за услугу 500 EUR',
 ]

// console.log(getInfo(prices))

// Результат: [3,3]

// 3.1
// function getInfo(arr) {
//     let res = []
//     a = arr.filter(el => el[0] === 'Ц' && el[1] === 'е' && el[2] === 'н' && el[3] === 'а' ).length
//     b = arr.filter(el => el[el.length - 1] === '$').length
//     res.push(a,b)
//     console.log(res);
// }
// getInfo(prices)

// // 3.2
// function getInfo2(arr) {
//     let v = prices.filter(el => el.startsWith('Цена'))
//     let l = prices.filter(el => el.endsWith('$'))
//     let res = [v.length,l.length]
//     console.log(res);
// }
// getInfo2(prices)

// 4.
// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
let arrays = [ 
'89840959944 exampleonemain@mail.ru', 
'+79840959933 forreason@yandex.net', 
'somemail@mail.ru', 
'89840959900 example@gmil.ru', 
'+79840959911', 
'grandthere@mail.ru',
'jetpackfor@gmail.ru',
 '89840959922 some@yandex.com',
 ] 

// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] 
// ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']

// let phones = []
// let emails = []
// function data_users(arr) {
//     let arr1 = arr.map(el => el.split(' '))
//     arr1.filter(el => el.filter(i =>i.includes("@") ? emails.push(i) : phones.push(i)))
// }
// data_users(arrays)
// console.log(phones,emails);

// 5. Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

// Пример:
	let phones = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
	
Результат: [
'4000*****9499',
'4000*****7379',
'4000*****9869',
'4000*****7859',
'4000*****6899',
'4000*****4699'
]

const new_arr = phones.map(el => (el.substring(0, 4) + '*****' + el.substring(15,el.length)))
console.log(new_arr);