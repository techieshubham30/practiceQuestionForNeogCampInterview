const inputText=document.querySelector('.input-text');
const output=document.querySelector('.output');
const outptButton=document.querySelector('.get-output');
var url="https://api.funtranslations.com/translate/ferb-latin.json";

outptButton.addEventListener("click",getOutPut);

function getOutPut(){
    var text=inputText.value;
    fetch(serverUrl(text))
    .then(response=>response.json())
    .then(json=>{
        output.innerText=json.contents.translated;
    })
}

function serverUrl(txt){
    return url+"?"+"text="+txt;
}

