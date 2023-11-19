let data = [
    {
        id: 1,
        title: 'Бухгалтерские услуги в вашем городе',
        button: 'Наша презентация'
    },
    {
        id: 2,
        title: 'Финансовый отчет за год',
        button: 'Заказать услугу'
    },
    {
        id: 3,
        title: 'Вызов бухгалтера',
        button: 'Открыть форму'
    },
    {
        id: 4,
        title: 'Консультация бухгалтера',
        button: 'Отправить запрос'
    },
]

const slider_wrapper = document.querySelector('.slider_wrapper')
const left_btn = document.querySelector('.left')
const right_btn = document.querySelector('.right')
let slider_index = 0
let card_width = 1100

function render(arr) {
    arr.forEach(el => {
        const card_item = document.createElement('div')
        card_item.classList.add('card_item')
        const title = document.createElement('h1')
        title.innerText = el.title
        const btn = document.createElement('button')
        btn.innerText = el.button

        card_item.append(title, btn)
        slider_wrapper.append(card_item)
    });

    left_btn.onclick = () => {
        if (slider_index !== data.length-1) {
            slider_wrapper.style.left = `${-1 * ++slider_index * card_width}px`
        } else {
            slider_index = 0
            slider_wrapper.style.left = '0px'
        } 
    }
    right_btn.addEventListener('click', () => {
        if (slider_index !== 0) {
            slider_wrapper.style.left = `${-1 * --slider_index * card_width}px`  
          } else {
              slider_index = data.length-1
              slider_wrapper.style.left = `${-1 * slider_index * card_width}px`
          }
    })
}

render(data)
