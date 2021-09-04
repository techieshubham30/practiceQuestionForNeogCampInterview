const inputs=document.querySelectorAll('.input');
const output=document.querySelector('.result');
const buttons=document.querySelectorAll('.btn');

buttons[0].addEventListener("click",add);
buttons[1].addEventListener("click",sub);
buttons[2].addEventListener("click",mul);
buttons[3].addEventListener("click",div);




function add(){
    var result=Number(inputs[0].value)+Number(inputs[1].value);
    output.innerText=result;
}


function sub(){
    var result=Number(inputs[0].value)-Number(inputs[1].value);
    result=result.toPrecision(4);
    output.innerText=result;
}


function mul(){
    var result=Number(inputs[0].value)*Number(inputs[1].value);
    output.innerText=result;
}


function div(){
    var result=Number(inputs[0].value)/Number(inputs[1].value);
    output.innerText=result;
}

