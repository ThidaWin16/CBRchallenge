const btn = document.querySelector('#btn');
const main = document.querySelector('.container');
const message = pageEles(main, 'div', 'Press Start button', 'message');
const url = 'questions_car_nl.json';

btn.onclick = loadData;

function pageEles(parent,t,html,c){
    const ele = document.createElement(t);
    ele.innerHTML = html; 
    ele.classList.add(c);
    return parent.appendChild(ele);
}

function loadData(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}
