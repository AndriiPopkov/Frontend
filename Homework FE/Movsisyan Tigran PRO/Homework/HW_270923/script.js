let url = "https://dummyjson.com/products"
const containerCard = document.querySelector('.containerCard')

function fetchPost() {
    fetch(url) 
    .then(res => res.json())
    .then(data => renderCard(data.products))
}

function renderCard(array) {
    for (let el of array) {
        // console.log(el)
        const card = document.createElement('div')
        card.classList = 'card'
        const img = document.createElement('img')
        img.src = el.images[0]
        img.classList = 'img'

        const span_div = document.createElement('div')
        span_div.classList = 'span_div'

        const span1 = document.createElement('span')
        span1.classList = 'fa fa-star'
        const span2 = document.createElement('span')
        span2.classList = 'fa fa-star'
        const span3 = document.createElement('span')
        span3.classList = 'fa fa-star'
        const span4 = document.createElement('span')
        span4.classList = 'fa fa-star'
        const span5 = document.createElement('span')
        span5.classList = 'fa fa-star'

        const name = document.createElement('h4')
        name.classList = 'name'
        name.innerText = 'Title: ' + el.title
        const price = document.createElement('h4')
        price.classList = 'price'
        price.innerText = 'Price: ' + el.price + '$'

        span_div.append(span1, span2, span3, span4, span5)
        card.append(img, name, price, span_div)
        containerCard.append(card)

        function rating () {
            let a = Math.round(el.rating)
            let i = 0
            while (i < a) {
                span_div.childNodes[i].classList.add('active'); i++;
            } 
        }
        rating()
    }
}
// }

// function functions() {
//     fetchPost()
// }

fetchPost()

// Promise.all([fetchPost])
