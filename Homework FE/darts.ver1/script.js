const start = document.querySelector(".start");
const ostatok = document.querySelector(".ostatok");
const enter = document.querySelector(".enter");
const list = document.querySelector(".list");
const summ = document.querySelector(".summ")
const select = document.querySelector(".select")
const weg = document.querySelector(".delete")
let number = "";
let finish = select[0].value.toString();
console.log(finish);

const onbuttonclick = () => {ostatok.innerText = "60"};
// const onnumberclick = (event) => {console.log(event.target)}
const onnumberclick = (event) => {number += event.target.innerText 
summ.innerText = number};

const onenterclick = () => {if (number === ostatok.innerText) {
    ostatok.innerText = Number(ostatok.innerText) + 10} else {
        ostatok.innerText = Number(ostatok.innerText) - 1
    }

if (number === finish) {alert("игра закончена")}
console.log(number, finish)
number = ""

// summ.innerText = number
}

const onselectchange = () => {finish = select.value}
const ondeleteclick = () => {
number = number.slice(0, number.length - 1)
summ.innerText = number}

start.addEventListener("click", onbuttonclick);
list.addEventListener("click", onnumberclick);
enter.addEventListener("click", onenterclick);
select.addEventListener("change", onselectchange);
weg.addEventListener("click", ondeleteclick);
