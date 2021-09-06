const inputNews=document.querySelector('.input-news');
const sourceOfNews=document.querySelector('.news-source');

const checkNewsTruth=document.querySelector('.check');

const outPut=document.querySelector('.result');

const fakeNewsSources=["Facebook","Whatsapp","Telegram"];

checkNewsTruth.addEventListener("click",checkNews);

function checkNews(){

    for(var i=0;i<fakeNewsSources.length;i++){
        if(sourceOfNews.value==fakeNewsSources[i]){
            outPut.innerText=`Don't believe things on ${sourceOfNews.value}`;
            break;
        }
    }

    return;

}