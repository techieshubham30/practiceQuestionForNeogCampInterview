const callApi=document.querySelector('.call-api');
const getOutput=document.querySelector('.get-output');
const url="https://api.funtranslations.com/translate/pig-latin.json";

callApi.addEventListener("click",apiHandler);

function apiHandler(){
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
    }else if(response.status==404 ){
        getOutput.innerText="page not found";
    }else if(response.status==401){
        getOutput.innerText="you are not logged in";
    }
}

function errorHandler(error){
    console.log(error);
}
