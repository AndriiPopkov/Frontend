const tooltip = document.querySelector('.tooltip');

// 1.
const nameInput = document.querySelector('#nameInput')

nameInput.addEventListener('keypress', (event)=> {
    if (event.target.value.length > 11) {
        event.preventDefault()
    }
})

// 2.
nameInput.addEventListener('blur', (event) => {
    if (event.target.value.length < 3) {
        event.target.classList.add('errorInput')
        event.target.focus()
    } else {
        event.target.classList.remove('errorInput')
    }
})

// 3.
const bubblingBlock = document.querySelector('#bubblingBlock')
bubblingBlock.addEventListener('mouseover', (ev) => {
    bubblingBlock.classList.add('bubblingBlockY')
    // ev.target.style.backgroundColor = 'yellow'
})

bubblingBlock.addEventListener('mouseleave', (ev) => {
    bubblingBlock.classList.remove('bubblingBlockY')
    // ev.target.style.backgroundColor = ''
})

// 4.
const firstButton = document.querySelector('#firstButton')
const secondButton = document.querySelector('#secondButton')
const thirdButton = document.querySelector('#thirdButton')

bubblingBlock.addEventListener('click', (event) => {
    if (!event.defaultPrevented) {
        console.log(`Кликнули по ${event.target.id}`);
    }
})

// 5.
// 5.1
// bubblingBlock.addEventListener('click', (ev) => {
//     if (ev.target.id !== 'firstButton') 
//     console.log(`Кликнули по ${ev.target.id}`); 
// })

// 5.2
// firstButton.addEventListener('click', (ev) => {
//     ev.stopPropagation()
// })

// 6.
firstButton.addEventListener('click', (ev) => {
    ev.preventDefault()
})

// 7.
const link = document.querySelector('a')
link.addEventListener('click', (ev) => {
    ev.preventDefault()
    console.log('Ссылка не открывается - запрещено!');
})

// 8.
const formInput = document.querySelectorAll('.input')

const submit = document.querySelector('[type = "submit"]')
submit.addEventListener('click', (event) => {
    formInput.forEach(element => {
        if (element.value === '') {
            element.classList.add('errorInput')
            event.preventDefault()
        }
    })
})




