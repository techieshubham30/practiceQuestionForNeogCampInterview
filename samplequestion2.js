const textInput=document.querySelector('.input');
const button=document.querySelectorAll('.btn');

button[0].addEventListener("click",incrFnt);
button[1].addEventListener("click",decrFnt);


function incrFnt(){
    const computedFontSize=window.getComputedStyle(textInput).fontSize;
    var x=parseFloat(computedFontSize);
    x=x+2;
    textInput.style.fontSize=x+"px";

    
}


function decrFnt(){
    const computedFontSize=window.getComputedStyle(textInput).fontSize;
    var x=parseFloat(computedFontSize);
    x=x-2;
    textInput.style.fontSize=x+"px";


}