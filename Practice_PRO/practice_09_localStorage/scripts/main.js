// 1
// localStorage.setItem('test', 100)
// console.log(localStorage.getItem('test'));
// localStorage.removeItem('test')

// 2
// document.addEventListener('DOMContentLoaded', (event) => {
//   const existingValue = localStorage.getItem('firstEnter');
//   if (existingValue) {
//     console.log(existingValue);
//   } else {
//     localStorage.setItem('firstEnter', Date.now())
//   }
// });

// 3
// const rootDiv = document.querySelector('div.root')
// const inputElement = document.createElement('input')
// rootDiv.append(inputElement)

// inputElement.addEventListener('focusout', (e) => {
//   localStorage.setItem('inputValue', inputElement.value)
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const inputValue = localStorage.getItem('inputValue')
//   if (inputValue) {
//     inputElement.value = inputValue
//   }
// })

// Пример записи в localStorage объекта и обратно
// const myObj = {
//   name: 'Vasilij',
//   surname: 'Vailiev'
//  }

// localStorage.setItem('myObj', JSON.stringify(myObj));

// const serializedData = localStorage.getItem('myObj');
// console.log(serializedData);
// const deserialized = JSON.parse(serializedData);
// console.log(deserialized);

// 4
const inputForma = document.createElement('div')
inputForma.classList.add('forma')
document.body.append(inputForma)

const tittleForm = document.createElement('h3')
tittleForm.textContent = 'Форма обратной связи'

const lastName = document.createElement('input')
lastName.placeholder = 'фамилия'

const firstName = document.createElement('input')
firstName.placeholder = 'имя'

const imailInput = document.createElement('input')
imailInput.placeholder = 'email'

const telef = document.createElement('input')
telef.placeholder = 'phone number'

const btn_send = document.createElement('button')
btn_send.textContent = 'отправить'

const btn_cancel = document.createElement('button')
btn_cancel.textContent = 'отмена'

inputForma.append(tittleForm, lastName, firstName, imailInput, telef, btn_send, btn_cancel)

// 5
btn_send.addEventListener('click', (e) => {
  localStorage.setItem('lastname', lastName.value)
  localStorage.setItem('firstname', firstName.value)
  localStorage.setItem('email', imailInput.value)
  localStorage.setItem('phone', telef.value)
})

document.addEventListener('DOMContentLoaded', () => {
  const lname = localStorage.getItem('lastname')
  const fname = localStorage.getItem('firstname')
  if (lname) {
    lastName.value = lname
  }
  if (fname) {
    firstName.value = fname
  }
})

// 7
btn_cancel.addEventListener('click', (el) => {
  localStorage.clear()
  lastName.value = ''
  firstName.value = ''
})

// 8 
let modal = document.querySelector('.openmodalwindow')
modal.addEventListener('click', (e) => {
  if (inputForma.style.display === 'block') {
    inputForma.style.display = 'none';
  } else {
    inputForma.style.display = 'block';
  }
})








