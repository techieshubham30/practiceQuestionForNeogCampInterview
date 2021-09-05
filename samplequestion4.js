const textInput=document.querySelector('.input');
const buttons=document.querySelectorAll('.buttons');

buttons[0].addEventListener("click",textColorRed);
buttons[1].addEventListener("click",textColorGreen);
buttons[2].addEventListener("click",textColorBlue);


function textColorRed(){
  textInput.style.color="red";
  buttons[0].style.color="white";
  buttons[0].style.backgroundColor="red";
  buttons[1].style.backgroundColor="gray";
  buttons[2].style.backgroundColor="gray";


}

function textColorGreen(){
    textInput.style.color="green";
    buttons[1].style.color="white";
    buttons[1].style.backgroundColor="green";
    buttons[0].style.backgroundColor="gray";
    buttons[2].style.backgroundColor="gray";
  }
  
function textColorBlue(){
    textInput.style.color="blue";
    buttons[2].style.color="white";
    buttons[2].style.backgroundColor="blue";
    buttons[0].style.backgroundColor="gray";
    buttons[1].style.backgroundColor="gray";


  }