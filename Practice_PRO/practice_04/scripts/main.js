// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

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
let products = [ball, gloves, shoes, hammer, saw];

// 1
numbers.push(45);
numbers.push(45, 68, 23)
console.log(numbers);

// 2
let result1 = numbers.push(45,21,23);
console.log(numbers);

// 3 
const newBall = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
}
let result2 = products.push(newBall);
console.log(result2);

// 4
let result3 = numbers.pop()
console.log(numbers);
console.log(result3);

// 5
let result4 = numbers.unshift(9)
console.log(numbers);

// 6
let result5 = numbers.shift()
console.log(numbers);

// 7
let result6 = strings.splice(6,0,'and','lowercased')
console.log(strings);
let result7 = strings.splice(5,3,'tiny')
console.log(strings);

// 2.1
let isPresented = strings.includes('array');
console.log(isPresented);

// 2.2
const newBall2 = ball;
// проверить, есть ли в массиве products объекты newBall, newBall2
const res1 = products.includes(newBall);
const res2 = products.includes(newBall2);

// - найти индекс числа 0  в массиве чисел
// - найти индекс объекта `shark` в массиве объектов
// - найти индекс последнего вхождения числа 9 в массиве чисел
console.log(numbers);
console.log(numbers.indexOf(0));
console.log(products.indexOf(shark));
console.log(numbers.lastIndexOf(9));

// 3
// - объединить наш массив строк в одно предложение. Результатом должна быть строка, разделенная пробелами.
const joined = strings.join(' ');
console.log(joined);
// - объединить наш массив чисел в одно большое число (т.е. без разделителей)
const joinnumbers = numbers.join("")
console.log(joinnumbers);
// - вывести в консоль массив строк в обратном порядке
console.log(strings.reverse());

// 4 Методы с колбэком. Перебор массива.
// 4.1 - пройтись по массиву чисел, для каждого числа вывести, является ли оно четным.
numbers.forEach((item) => {
    if (item % 2 === 0) {
        console.log(item + ' is even');
    }
    else {
        console.log(item + ' is odd');
    }
});

// 4.2 - пройтись по массиву строк, для каждой строки, если она меньше 4 символов, выводить `short`, иначе - `long`
strings.forEach((item) => {
    if (item.length < 4) {
        console.log(item + ' is short');
    }
    else {
        console.log(item + ' is long')
    }
});

// 4.3 - пройтись по массиву товаров, вывести в консоль названия всех товаров
products.forEach(item => {
    console.log(item.name);   
});

// 4.4 - из массива чисел, получить новый массив, который будет содержать квадраты чисел
let newnumbers = [];
console.log(numbers);
numbers.forEach(item => {
    newnumbers.push(item ** 2)
});
console.log(newnumbers);

// 4.5 - из массива строк получить новый массив, который будет содержать массив ОБЪЕКТОВ, у которых будут свойства:
// * value - сама строка
// * size - если длина строки меньше 4 символов, то `short`, иначе - `long`
let newstrings = [];
strings.forEach(item => {
    if (item.length < 4) { newstrings.push(item = { value: item, size: "short" }) }
    else { newstrings.push(item = { value: item, size: "long" }) }
});
console.log(newstrings);

// 4.6 - из массива товаров получить массив имен товаров
let products2 = [];
products.forEach(item => {
    products2.push(item.name);
});
console.log(products2);

// 4.7 - из массива товаров получить массив "уцененных" товаров. 
// В новом массиве должны быть объекты товаров, у которых цена вдвое меньше, чем у исходных товаров.
const products50 = products.map(item => {
    return {
        name: item.name,
        category: item.category,
        img: item.img,
        price: item.price / 2
    };
});
console.log(products50);

// 5. Методы с колбэком. Поиск в массиве
// 5.1 - в массиве чисел, найти первое число, кратное 4
let number4 = 0;
numbers.filter(item => {
    if (item % 4 === 0) {
        number4 = item; 
    } 
});
console.log(numbers);
console.log(number4);

const number5 = numbers.find(item => item % 4 === 0);
console.log(number5);

// 5.2 - в массиве чисел, найти индекс первого числа, кратного 3
const number3 = numbers.indexOf(numbers.find(item => item % 3 === 0));
console.log(number3);

// 5.3 - в массиве объектов найти первый товар категории `Tools`
const tools = products.find(item => item.category === `Tools`);
console.log(tools);

// 5.4 - получить из массива чисел массив только нечетных чисел
console.log(numbers);
const evennumbers = numbers.filter(item => item % 2 === 0);
console.log(evennumbers);

// 5.5 - получить из массива строк массив тех строк, у которых длина больше 5
console.log(strings);
const newstrings5 = [];
strings.forEach(item => {
    if (item.length > 5)
        newstrings5.push(item);
});
console.log(newstrings5);

// 5.6 - получить из массива товаров массив из тех товаров, у которых цена больше 100.
let newproducts10 = [];
products.forEach(item => {
    if (item.price > 100)
        newproducts10.push(item);
});
console.log(newproducts10);

