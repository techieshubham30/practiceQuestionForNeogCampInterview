
obj1={
    name:"Ram",
    age:25,
    yuga:"Treta"
}

obj2={
    name:"Krishna",
    age:31,
    yuga:"dwapar"
}

console.log(getResult(obj1,obj2));

function getResult(ram,krishna){
    if(ram.age>krishna.age){
        return ram.name;
    }else{
        return krishna.name;
    }
}