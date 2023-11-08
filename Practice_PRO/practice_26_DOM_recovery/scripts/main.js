const productsContainerEl = document.querySelector('.products-container');
let productsDataSource = []
// 1
async function getProducts() {
    showLoader()
    let url = 'https://fakestoreapi.com/products'
    let res = await fetch(url)
    productsDataSource = await res.json()
    renderProducts(productsDataSource)
    hideLoader()
}

// 2
function renderProduct(obj) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')  

        const title = document.createElement('h3')
        title.classList.add('product-title') 
        title.innerText = `Title: ${obj.title}`

        const description = document.createElement('p')
        description.classList.add('product-description')  
        description.innerText = obj.description

        const price = document.createElement('p')
        price.classList.add('product-price')
        price.innerText = `Price: ${obj.price}`

        productCard.append(title, price, description)
        return productCard
    }

// 3
function renderProducts (products) {
    productsContainerEl.innerHTML = ''
    for (let el of products) {
        productsContainerEl.append(renderProduct(el)) 
    } 
}

// 4 
const select = document.querySelector('#productsSortSelect')

// 5
function sortProducts(sortRule, products) {
    switch (sortRule) {
        case 'price_asc': {
            products.sort((a, b) => a.price - b.price)
            break
        }
        case 'price_desc': {
            products.sort((a, b) => b.price - a.price)
            break
        }
        case 'title_asc': {
            products.sort((a,b) => a.title.localeCompare(b.title))
            break
        }
        case 'title_desc': {
            products.sort((a,b) => b.title.localeCompare(a.title))
            break
        }
        default: break
    }
}

// 6
select.addEventListener( 'change', (event) => {
  const val = event.target.value;
  sortProducts(val, productsDataSource);
  renderProducts(productsDataSource);
});

// 8 
const button = document.querySelector('#searchButton')
const input = document.querySelector('#searchInput')

const count = document.querySelector('.count')

button.addEventListener('click', () => {
    if (input.value) {
        renderProducts(productsDataSource.filter(el => el.title.toLowerCase().includes(`${input.value.toLowerCase()}`)))
        count.style.display = 'block'
        count.innerText = `Найдено - ${productsDataSource.filter(el => el.title.toLowerCase().includes(`${input.value.toLowerCase()}`)).length} шт.`
    } else {
        renderProducts(productsDataSource)
        count.style.display = 'none'
        
    }
})

// 9 
const modal_area = document.querySelector('.modal_area')

function showLoader () {
    modal_area.style.display = 'block'
}

function hideLoader () {
    modal_area.style.display = 'none'
}

getProducts()


