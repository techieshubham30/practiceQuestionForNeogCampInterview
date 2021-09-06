obj1={
    name:"Ram",
    power:2500,
    yuga:"Treta"
}

obj2={
    name:"Krishna",
    power:2325,
    yuga:"Dwapar"
}

console.log(morePower(obj1,obj2));

function morePower(ram,krishna){
    var ramPower=ram.power+ram.name.length;
    var krishnaPower=krishna.power+krishna.name.length;

    if(ramPower>krishnaPower){
        return ram.name;
    }else{
        return krishna.name;
    } 
}