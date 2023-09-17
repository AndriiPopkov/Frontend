const ball = {
    id: 1,
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
  };
  const gloves = {
    id: 2,
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
  };
  const shoes = {
    id: 3,
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
  };
  const hammer = {
    id: 4,
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
  };
  const saw = {
    id: 5,
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
  };
  const shark = {
    id: 6,
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
  };

  // Массив объектов
  let products = [ball, gloves, shoes, hammer, saw, shark];

const testObejct = {
    firstProperty: 'This is my first property',
    secondProperty: 'The second one',
    composedProperty: {
        firstPart: 'First part',
        secondPart: 'The second part'
    }
};

// 1. Пристрелочная задача. Освежаем в памяти сериализацию/десериализацию объектов,
// и обработчики событий. В файле `main.js` есть объект `testObject`, 
// который содержит поля. 
// Задача - его сериализовать и записать в `localStorage`, с ключом `testObject`.

// localStorage.setItem('test', JSON.stringify(testObejct))
// console.log(localStorage.getItem('test'));

// // 2.
// const saveTestObjectBtn = document.querySelector('#saveTestObjectBtn')
// saveTestObjectBtn.addEventListener('click', (el) => {
//     console.log(JSON.parse(localStorage.getItem('test')));
//     console.log((JSON.parse(localStorage.getItem('test'))).firstProperty);
    
// })

// 3.
const inputsBlock = document.querySelector('#inputsBlock')
const inputsInBlock = inputsBlock.querySelectorAll('input')

function saveInputsData() {
    let inputsData = {}

    // решение методом ForEach
    // inputsInBlock.forEach(item => {
    //     inputsData[item.id] = item.value
    // });

    for (let i = 0; i < inputsInBlock.length; i++) {
        inputsData[inputsInBlock[i].id] = inputsInBlock[i].value
    }

    // Записать в локалСторадж СЕРИАЛИЗОВАННЫЙ объект inputsData. ключ - inputsData
    localStorage.setItem('inputsData', JSON.stringify(inputsData))

    console.log(inputsData);
}

const saveDataBtn = document.querySelector('#saveInputsDataButton');
saveDataBtn.addEventListener('click', saveInputsData);

// Демонстрация отличия нотации через точку от нотации квадратных скобок
// при работе со свойствами объекта
// testObejct.myProperty = 'myValue';
// // testObject = { myProperty: "myValue" }
// const myVar = 'myKey';
// testObejct.myVar = "myValue"; // testObject = { myVar: "myValue"}
// testObejct[myVar] = "myValue"; // testObject = { myKey: "myValue" }

// 4.
const productsContainer = document.querySelector('.productsContainer')

function render (array) {
    for (let elem of array) {
    const productCard = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const price = document.createElement('p')
    const category = document.createElement('p')

    const addToCartBtn = document.createElement('button')
    addToCartBtn.className = 'addToCartBtn'
    addToCartBtn.textContent = 'В корзину'
    const removeFromCartBtn = document.createElement('button')
    removeFromCartBtn.className = 'removeFromCartBtn'
    removeFromCartBtn.textContent = 'Убрать'

    productCard.className = 'productCard'
    productsContainer.className = '.productsContainer'
    img.className = '.productImg'

    img.src = elem.img
    h3.innerText = elem.name
    price.innerText = elem.price
    category.innerText = elem.category

    productsContainer.append(productCard)
    productCard.append(img, h3, price, category, addToCartBtn, removeFromCartBtn)

    addToCartBtn.addEventListener('click', ()=> {
        const showBasket = document.createElement('button')
        showBasket.innerText = 'Показать корзину'
        productsContainer.append(showBasket)
        const clearBasket = document.createElement('button')
        clearBasket.innerText = 'Очистить корзину'
        productsContainer.append(clearBasket) 
        clearBasket.addEventListener('click', ()=> {
        localStorage.removeItem('basketInstance')
    } )
    }
   
    )
    
    
    }
}

render(products)

// 5.
let basket = {}

showBasket.addEventListener('click', ()=>{
    console.log(JSON.parse(localStorage.getItem('basketInstance')));
})



