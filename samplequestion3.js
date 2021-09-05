const textInput=document.querySelector('.input');
const headingText=document.querySelector('.text-to-heading');

const buttons=document.querySelectorAll('.btn');

buttons[0].addEventListener("click",changeToH1);
buttons[1].addEventListener("click",changeToH2);
buttons[2].addEventListener("click",changeToH3);



function changeToH1(){
    var element=document.createElement('h1');
    element.innerText=textInput.value;
    headingText.appendChild(element);
    textInput.style.display="none";
}


function changeToH2(){
    var element=document.createElement('h2');
    element.innerText=textInput.value;
    headingText.appendChild(element);
    textInput.style.display="none";
}


function changeToH3(){
    var element=document.createElement('h3');
    element.innerText=textInput.value;
    headingText.appendChild(element);
    textInput.style.display="none";
}

