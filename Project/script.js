const value = document.getElementById('value');
const value1 = document.getElementById('value1');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');
const price = document.querySelector('.price');
const price1 = document.querySelector('.price1');
const size = document.querySelector('.size');
const size1 = document.querySelector('.size1');
let cost = 1500;
let cost1 = 1500;
function increment1(){
    if(Number(value1.textContent)<10){
        let result1 = Number(value1.textContent) + 1;
        value1.textContent = result1;
}
    price1.textContent = Number(value1.textContent) * cost1 + '$';
}
function increment(){
    if(Number(value.textContent)<10){
        let result = Number(value.textContent) + 1;
        value.textContent = result;
}
    price.textContent = Number(value.textContent) * cost + '$';
}
function decrement(){
    if (Number(value.textContent)>1){
        let result = Number(value.textContent) - 1;
        value.textContent = result;
    }
    price.textContent = Number(value.textContent) * cost + '$';
    
}
function decrement1(){
    if (Number(value1.textContent)>1){
        let result1 = Number(value1.textContent) - 1;
        value1.textContent = result1;
    }
    price1.textContent = Number(value1.textContent) * cost1 + '$';
}
plus.onclick = increment;
minus.onclick = decrement;
plus1.onclick = increment1;
minus1.onclick = decrement1;

size.addEventListener('click', function (event){
    let clickTarget = event.target;
    let currentActive = document.querySelector('.active');
    if (clickTarget.classList.contains('medium')){
        cost = 1500;
        price.textContent = Number(value.textContent) * cost + '$';
        clickTarget.classList.add('active');
        currentActive.classList.remove('active');
    }else if (clickTarget.classList.contains('large')){
        cost = 1700;
        price.textContent = Number(value.textContent) * cost + '$';
        clickTarget.classList.add('active');
        currentActive.classList.remove('active');
    }
});
size1.addEventListener('click', function (event){
    let clickTarget = event.target;
    let currentActive = document.querySelector('.active');
    if (clickTarget.classList.contains('medium')){
        cost1 = 2000;
        price1.textContent = Number(value.textContent) * cost1 + '$';
        clickTarget.classList.add('active');
        currentActive.classList.remove('active');
    }else if (clickTarget.classList.contains('large')){
        cost1 = 2500;
        price1.textContent = Number(value.textContent) * cost1 + '$';
        clickTarget.classList.add('active');
        currentActive.classList.remove('active');
    }
});

