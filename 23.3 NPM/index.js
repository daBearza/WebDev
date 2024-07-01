import superheroes from "superheroes";

var heroName = superheroes;

// for(var i =0; i < heroName.length; i++){
//     console.log(`Never fear ${heroName[i]} is here.`);

// }


console.log(`Never fear ${heroName[random(heroName)]} is here.`);


function random(list){
    return Math.floor(Math.random()*list.length);
}