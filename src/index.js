
function fvNeve(param1, param2){

}

let masikFv = function (param1, param2){
    console.log(param1);
};

/*
document.addEventListener('DOMContentLoaded', function (){
    console.log("page loaded");
    
    document.getElementById('szinezes').addEventListener('click', function(){
        document.body.style.backgroundColor = 'lightblue';
    });
});
*/


let t = [4, 28, 715, -99];
/*
t.sort((a, b) => {if (a < b){
        return -1;
    }else if(b < a){
        return 1;
    }else{
        return 0;
    }
});
*/
t.sort((a, b) => {return a - b}); //alapból stringként módostítja a sorrendet ezt megváltoztattuk ez előző kommenttel is
t = t.filter(e => Math.abs(e) > 30); //Feltétel alapján kiválasztja a tömb elemeit (Math.abs(e) = abszolút értéke a számnak)
//zárójleke opcionális ha csak 1 db paraméter van, ha csak egy darab return utasítása van a függvénynek a kapcsos zárójelek és return is elhagyható
t = t.map(e => e.toFixed(2)); //t.map a tömb minden elejével elvégez valamit majd átrakja egy másik tömbbe
t.forEach((e, index) => {
    console.log(index, e);
});
console.log(t);


let szam = 56;
class Kutya{
    nev = 'Bodri'
    
}

// Mellékhatás - Side effect
//nincs mellékhatása
 1 + 1;
Math.sqrt(1*2/4);
[1, 2, 3].filter(e => e > 2);
szam > 2;
[56, 33].includes(szam);
new Date();
new Kutya();
//Van mellékhatása
console.log('hello');
let a = szam++; //hozzáadja az 'a' változóhoz a számot majd szam-ot noveli
let b = ++szam; //noveli a számoot majd hozzáadja a 'b' változóhoz
console.log(a);
console.log(b);
t.push(45);
t.sort();
Math.random();

[1, 2, 3, 4, 5]

function kettonelNagyobb(t){

}

//nem tiszta - console.log() mellékhtás
function tombKiir(t){
    t.forEach(e => console.log(e));
}

//nem tiszta a document nem paraméter v. lokális változó
function getButtonColor(){
    return document.getElementById('szinezes').style.backgroundColor;
}







document.addEventListener('DOMContentLoaded', () => {
    console.log('page loaded');
    let idozito;
    // Closure
    document.getElementById('szinezes').addEventListener('click', () =>{
        document.body.style.backgroundColor = 'lightblue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 2000);
        if (idozito !== undefined){
            console.log('Clearing timer', idozito);
            clearInterval(idozito);
        }
        idozito = setInterval(() => {
            console.log(document.body.style.backgroundColor);
        }, 1000)
        
    });


});
1