// создание разметки
const body = document.querySelector('body')

const content = document.createElement('div')
content.classList.add('content')

const addForm = document.createElement('form')
addForm.classList.add('addForm')

const container_cards = document.createElement('div')
container_cards.classList.add('container_cards')

body.prepend(content)
content.append(addForm,container_cards)

// создание элементов в Form
const par = document.createElement('h1')
par.classList.add('h1')
par.innerText = 'Добавление новой карточки' 

const inpName = document.createElement('input')
inpName.classList.add('inpName')
inpName.name = 'name'
inpName.placeholder = 'Name'

const inpSalary = document.createElement('input')
inpSalary.classList.add('inpSalary')
inpSalary.name = 'salary'
inpSalary.placeholder = 'Salary'

// const inpImage = document.createElement('input')
// inpImage.classList.add('inpImage')
// inpImage.name = 'image'
// inpImage.placeholder = 'Link for image'

const submit = document.createElement('input')
submit.classList.add('submit')
submit.type = 'submit'
submit.innerText = 'Отправить'

addForm.append(par,inpName,inpSalary,submit)

// добавление новой карточки пользователя
addForm.onsubmit = (e) => { 
    e.preventDefault()
    let form_data = new FormData(addForm)
    let data = Object.fromEntries(form_data)
    data.id = Date.now()
    data.id = (names.length !== 0) ? Math.max(...names.map(elem => elem.id)) + 1 : 1
    data.image = 'https://source.unsplash.com/random'
    addUser(data)
}

let data = [
    {id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
    {id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
    {id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
    {id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
    {id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
    {id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
    {id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
    {id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
    {id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
]



// let names = JSON.parse(localStorage.getItem('names')) == 0 ? localStorage.setItem('names', JSON.stringify(data)) : 
// JSON.parse(localStorage.getItem('names')) ?? data

// let names = JSON.parse(localStorage.getItem('names')) == 0 ? data : names

let names = JSON.parse(localStorage.getItem('names')) ?? data


function render(array) {
    for (let elem of array) {
        const id = document.createElement('p')
        id.innerText =`ID: ${elem.id}` 

        const image = document.createElement('img')
        image.classList.add('card_img')
        image.src = elem.image

        const name = document.createElement('h3')
        name.innerText = `Name: ${elem.name}`
        const salary = document.createElement('p')
        salary.innerText = `Salary: ${elem.salary}`

        const container_card = document.createElement('div')
        container_card.classList.add('container_card')

        const text = document.createElement('div')
        text.classList.add('text')

        const del_card = document.createElement('p')
        del_card.innerText = 'Double click for delete Card'
        del_card.classList.add('del_card')

        text.append(name, salary, id)
        container_card.append(image, text,del_card)
        container_cards.append(container_card)

        container_card.addEventListener('dblclick', (ev) => deleteUserById(elem.id))

        container_card.addEventListener('mouseover', (ev) => {
            del_card.style.display = 'block'
        })

        container_card.addEventListener('mouseout', (ev) => {
            del_card.style.display = 'none'
        })
    }
};

function rerender(array) {
        localStorage.setItem('names', JSON.stringify(array))
        container_cards.innerHTML = ''
        render(array)
}

function deleteUserById(id) {
    names = names.filter(elem => elem.id !== id)
    rerender(names)
}

function addUser(obj){
    names.push(obj)
    rerender(names)
}

render(names)

