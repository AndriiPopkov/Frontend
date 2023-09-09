// We will work here!

const numbers = [10, 45, 3, 9, 19, 11, -5, 0, 7, 21, 89, 68, 1, 13, 8];
const strings = ['This', 'is', 'an', 'array', 'of', 'Test', 'strings'];

const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
  };
  const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
  };
  const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
  };
  const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
  };
  const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
  };
  const shark = {
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
  };
  
  // Массив объектов
  let products = [ball, gloves, shoes, hammer, saw, shark];

// 1.
console.log('--------1--------');
let task1 = numbers.reduce((total, el) => total + el, 0)
console.log(task1);

// 2.
console.log('--------2--------');
let task2 = products.reduce((total,el) => total + el.price, 0)
console.log(task2);

// 3.
console.log('--------3--------');
const task3 = strings.reduce((acc,el) => {
    acc[el] = el.length;
    return acc
},{});
console.log(task3);

// 4.
console.log('--------4--------');
let task4 = products.reduce((acc, el) => {
    acc.push(el.category);
    return acc
}, [])
console.log(task4);

// 6.
console.log('--------6--------')
let task6 = products.reduce((acc,el) => {
    if (acc[el.category]){
        acc[el.category] += el.price;
    } else {
        acc[el.category] = el.price;
    }
    return acc
},{})
console.log(task6);

// let result6 = products.reduce((acc, elem) => {
//     acc[elem.category] ? (acc[elem.category] += elem.price) : (acc[elem.category] = elem.price)
//     return acc
// }, {})

// products.reduce((accumulator, currentValue) => {
//     accumulator[currentValue.category] =
//       (accumulator[currentValue.category] || 0) + currentValue.price;
//     return accumulator;
//   }, {})


// 7.
console.log('--------7--------')
// const duplicates = [1, 4, 7, 1, 2, 3, 3, 2, 2, 4, 9];

// function removeDuplicates(arr) {
//     return arr.filter((el, index, self) => {
//         return self.indexOf(el) === index;
//     });
// }
// const result7 = removeDuplicates(duplicates)
// console.log(result7);

// // вариант 2
// const arr1 = [1, 4, 7, 1, 2, 3, 3, 2, 2, 4, 9];
// function removeDuplicates(arr) {
//     const result = [];
//     arr.forEach(element => {
//         if (!result.includes(element)) {
//             result.push(element);
//         }
//     });
//     return result;
// }
// console.log(removeDuplicates(arr1));

// 8.
console.log('--------8--------')
// const pars = document.querySelectorAll('p');
// let result = [...par].reduce((acc,val)=>{
//   acc.push(val.textContent);
//   return acc;
// }, []);
// console.log(result);

const pars = document.querySelectorAll('p');
let result = [];
pars.forEach(par => {
  result.push(par.textContent);
});
console.log(result);

// 9.
console.log('--------9--------');
const pars9 = document.querySelectorAll('p');
const task9 = Array.from(pars9).reduce((acc,el) => {
    acc[el.id] = el.textContent;
    return acc
},{});
console.log(task9);


// 10.
console.log('--------10--------');
// Написать функцию `findExtra`. Она принимает на вход массив чисел. 
// В массиве содержатся положительные и отрицательные числа. Найти то число, 
// у которого в массиве нет соответствующего числа с противоположным знаком.

// findExtra( [1, 7, -1, 9, 4, -9, -7] ); // 4
// findExtra( [14, -18, 2, -14, 90, -2, -90, -25, 18, -25, 3, -25, -3] ); // -25
// findExtra( [-3,1,2,3,-1,-4,-2] ); // -4

const arr = [1, 7, -1, 9, 4, -9, -7];

// [ 1, -1,  4, 7, -7,  9, -9]

arr.sort((a, b) => {
  // Сравниваем числа по модулю
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  if (absA < absB) {
    return -1;
  } else if (absA > absB) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);

// Подсказка: задача не на метод `reduce`, нужно использовать другие методы массивов.



console.log('---REDUCE---');
// найти индекс максимального значения элемента массива
a = [1, 3, 2]
let d = a.reduce((prev, item, index) => {
  if (item > prev[1]) {
    return [index, item];
  } else {
    return prev;
  }
}, [0, a[0]]);
console.log(d);



