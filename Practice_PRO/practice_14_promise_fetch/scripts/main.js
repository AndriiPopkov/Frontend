// Здесь пока ничего нет.

// 1.
// const url = 'https://fakestoreapi.com/products/categories'
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data))

// 2.
// const categoriesSelect = document.querySelector('#categoriesSelect')

// const renderSelect = () => {
//     // запросить данные категорий
//     fetch('https://fakestoreapi.com/products/categories')
//         .then( resp => resp.json())
//         .then( data => {
//             console.log('Response data: ', data);
//             // отрендерить их в селекте
//             data.forEach( elem => {
//                 const optionEl = document.createElement('option');
//                 optionEl.value = elem;
//                 optionEl.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
//                 categoriesSelect.append(optionEl);
//             });
//         });
// }

// renderSelect();

// 3.
// const loader = document.querySelector('.loader')
// loader.style.display = 'none'
// loader.style.color = 'red'

// const productsContainer = document.querySelector('#productsContainer');
// function getProducts(category) {
//     fetch(`https://fakestoreapi.com/products/category/${category}`)
//         .then( resp => resp.json())
//         .then( data => {
//             console.log('category: ', data);
//             data.forEach( product => {
//                 const productCard = document.createElement('div');
//                 productCard.classList.add('productCard');
//                 const title = document.createElement('h3');
//                 title.textContent = product.title;
//                 const price = document.createElement('p');
//                 price.textContent = product.price;
//                 const description = document.createElement('p');
//                 description.textContent = product.description;

//                 productCard.append(title, price, description);
//                 productsContainer.append(productCard);
//             })
//             loader.style.display = 'none'
//         });
// }

// getProducts('jewelery')

// 5.6.
const loader = document.querySelector('.loader')
loader.style.display = 'block'

// 7. 
function requestProducts(category) {
    return new Promise ((resolve) => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(resp => resp.json())
        .then(data => resolve(data))
    })           
}

// requestProducts('jewelery').then(data => console.log(data))

function renderProducts(array) {
    array.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');
        const title = document.createElement('h3');
        title.textContent = product.title;
        const price = document.createElement('p');
        price.textContent = product.price;
        const description = document.createElement('p');
        description.textContent = product.description;

        productCard.append(title, price, description);
        productsContainer.append(productCard);
        loader.style.display = 'none'
    })
}

// requestProducts('jewelery').then(data => renderProducts(data))

function renderSelect() {
    return new Promise((resolve) => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(resp => resp.json())
            .then(data => {
                data.forEach(elem => {
                    const optionEl = document.createElement('option');
                    optionEl.value = elem;
                    optionEl.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
                    categoriesSelect.append(optionEl);
                });
            }).then(data => resolve(data))
    })
}

categoriesSelect.addEventListener('change', (event) => {
    productsContainer.innerHTML = ''
    loader.style.display = 'block'
    renderProducts(event.target.value)
})

Promise.all([renderSelect(), renderProducts()]).then(() => {
    loader.style.display = 'none'
})