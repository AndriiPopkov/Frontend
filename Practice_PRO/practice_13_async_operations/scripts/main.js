// Здесь пока ничего нет.

// 1.
// setTimeout(() => {
//     console.log('Delayed message');
// }, 5000);

// 2.
// const block = document.createElement('div')
// block.classList.add('block')
const root = document.querySelector('#root')
// root.append(block)

// const input = document.createElement('input')

// const button = document.createElement('button')
// button.innerText = 'Запуск'

// const cancel = document.createElement('button')
// cancel.classList.add('cancel')
// cancel.innerText = "Отмена"

// block.append(input, button, cancel)

// let timerId;

// button.addEventListener('click', (ev) => {
//     timerId = setTimeout(() => {
//         console.log('Delayed message - ' + input.value + 'c');
//         cancel.style.display = 'none'
//     }, input.value * 1000);

//     cancel.style.display = 'block'
// })
// cancel.addEventListener('click', (ev) => {
//     clearTimeout(timerId)
//     console.log('Отмена сработала');
//     cancel.style.display = 'none'
// })


// 4.
// setInterval(() => {
//     console.log("Прошло 5 секунд");
// }, 5000);

// 5.
const timeblock = document.createElement('div')
timeblock.classList = "timeblock"
const date = document.createElement('h2')
const time = document.createElement('h2')
timeblock.append(date,time)
root.append(timeblock)

const currentDate = new Date();

function displayCurrentTime() {
    const currentDate = new Date();
    let timeTablo = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    date.innerText = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()}`
    time.innerText = timeTablo
}
setInterval(displayCurrentTime,1000);

// 6.
const simpleTimerContainer = document.querySelector('#simpleTimerContainer')
const realTime = document.createElement('p')
const start = document.createElement('button')
start.innerText = 'Старт'
const reset = document.createElement('button')
reset.innerText = 'Сброс'

simpleTimerContainer.append(realTime, start, reset)

realTime.innerText = '00:00:00:00'
let a = 0

function startTimer() {
    setInterval(() => {
        let totalTime = a++
        let ms = totalTime % 100
        let sec = String(Math.floor((totalTime / 100) % 60)).padStart(2, '0')
        let min = String(Math.floor((totalTime / 6000) % 60)).padStart(2, '0')
        let hours = String(Math.floor((totalTime / 360000) % 60)).padStart(2, '0')
        realTime.innerText = `${hours}:${min}:${sec}:${ms}`
    }, 10);
}

start.addEventListener('click', (ev) => {
    startTimer()
    reset.addEventListener('click', (ev) => {
        clearInterval(startTimer)
        realTime.innerText = '00:00:00:00'
    })
})


// 8.
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Successfully finished!')
//         reject('Something went wrong!')
//     }, 5000);
// })

// promise.then((resoverData) => {
//             console.log(resoverData);
//         })

//        .catch((rejectData) => {
//             console.log('Rejected', rejectData);
//         })


