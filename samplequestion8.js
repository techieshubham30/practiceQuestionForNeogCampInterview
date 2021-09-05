const callApi=document.querySelector('.call-api');
const apiResult=document.querySelector('.result');
const url="https://api.funtranslations.com/translate/ferb-latin.json";

callApi.addEventListener("click",clickHandler);

function clickHandler(){
    fetch(url)
    .then(checkError)
    .then(json=>{
        console.log(json);
    })
    .catch(errorHandler)
}

function checkError(response){
    if(response.status>=200 && response.status<=299){
        return response.json;
    }else{
        apiResult.innerText=`error status: ${response.status}`;

    }
}

function errorHandler(error){
    console.log(`network error: ${error}`);
}