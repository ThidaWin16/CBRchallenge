const btn = document.querySelector('#btn');
const main = document.querySelector('.container');
const message = pageEles(main, 'div', 'Press Start button', 'message');
const output = pageEles(main, 'div', '', 'game');
const url = 'original_cbr_content/questions_car_nl.json';
//click button for function loaddata//
btn.onclick = loadData;

function loadData(){
    btn.style.display = 'none';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const temp = {
            total: data.length,
            q : data,
            score: 0,
            counter:0
        };
        createQuestion(temp);
    })
}

function createQuestion(data){
    const el = pageEles(output,'div','','question');

    if(data.q.length == 0){
        message.textContent = 'Game Over';
    }else {
        const question = data.q.shift();
        data.counter++;
        message.textContent = 'Question ${data.counter} of ${data.counter}';
        outputQuestion(question, el);
    }
}

function outputQuestion(question, parent){
    console.log(question);
    const que = pageEles(parent,'div',question.question,'question');
}

function pageEles(parent,t,html,c){
    const ele = document.createElement(t);
    ele.innerHTML = html; 
    ele.classList.add(c);
    return parent.appendChild(ele);
}