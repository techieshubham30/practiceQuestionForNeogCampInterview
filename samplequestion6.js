const text=document.querySelector('.loading');
const loadButton=document.querySelector('.load');
loadButton.addEventListener("click",stopLoading);

function stopLoading(){
    text.style.display="none";
}