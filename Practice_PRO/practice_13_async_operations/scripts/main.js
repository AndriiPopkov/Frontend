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
    let timeTablo = `${String(currentDate.getHours()).padStart(2,'0')}:${String(currentDate.getMinutes())
                     .padStart(2,'0')}:${String(currentDate.getSeconds()).padStart(2,'0')}`
    date.innerText = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()}`
    time.innerText = timeTablo
}
setInterval(displayCurrentTime,1000);

// 6.7.
const simpleTimerContainer = document.querySelector('#simpleTimerContainer')
const realTime = document.createElement('p')
const start = document.createElement('button')
start.innerText = 'Старт'
const reset = document.createElement('button')
reset.innerText = 'Сброс'

const pause = document.createElement('button')
pause.innerText = 'Пауза'

const renew = document.createElement('button')
renew.innerText = 'Возобновить'

simpleTimerContainer.append(realTime, start, reset, pause, renew)

realTime.innerText = '00:00:00:00'
let a = 0
let totalTime = 0
let totalTime2
let timerID

start.addEventListener('click', (ev) => {
    if (realTime.innerText === '00:00:00:00') {
        timerID = setInterval(() => {
            totalTime++
            let ms = totalTime % 100
            let sec = String(Math.floor((totalTime / 100) % 60)).padStart(2, '0')
            let min = String(Math.floor((totalTime / 6000) % 60)).padStart(2, '0')
            let hours = String(Math.floor((totalTime / 360000) % 60)).padStart(2, '0')
            realTime.innerText = `${hours}:${min}:${sec}:${ms}`
        }, 10);
    }
})

reset.addEventListener('click', (ev) => {
    clearInterval(timerID)
    realTime.innerText = '00:00:00:00'
    totalTime = 0
    totalTime2 = 0
})

pause.addEventListener('click', (ev) => {
    clearInterval(timerID)
})

renew.addEventListener('click', (ev) => {
    if (realTime.innerText !== '00:00:00:00') {
        timerID = setInterval(() => {
            let totalTime2 = 0
            totalTime2 = totalTime++
            let ms = totalTime2 % 100
            let sec = String(Math.floor((totalTime2 / 100) % 60)).padStart(2, '0')
            let min = String(Math.floor((totalTime2 / 6000) % 60)).padStart(2, '0')
            let hours = String(Math.floor((totalTime2 / 360000) % 60)).padStart(2, '0')
            realTime.innerText = `${hours}:${min}:${sec}:${ms}`
        }, 10);
    }
})

// 8.9.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Successfully finished!')
        reject('Something went wrong!')
    }, 5000);
})

promise.then((resoverData) => {
            console.log(resoverData);
        })

       .catch((rejectData) => {
            console.log(rejectData);
        })


