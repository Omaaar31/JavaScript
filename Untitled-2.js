/*
var num=1;
console.log(num);
chiffre=31;
console.log(chiffre);

console.log(4.566+2);

var num=0;
num=num++;
console.log(num);
*/
/*
var msg = "Bonjourno \"xhxcx\"";
var slt = 'Salut !!';
console.log(msg);
console.log("msg");
console.log(slt);

var msg = "Salut";
var name = "José";
var space = " ";
console.log(msg + name);
console.log(msg + space + name);
console.log(msg + " " + name);

name+=" " + msg;
console.log(name)
*/
/*
var name = "pierrot";
var age = 23;
var space = " ";
var txt = "Bonjour "+ name  + " tu as " + age + " ans aujourd'hui, c'est la fiesta !"
console.log(txt);
*/
/*
var name = "Algerie";
console.log(name.length);
console.log(name[3]);
console.log(name[name.length-1]);
*/
/*
var name = "polo";
var age = 40;
var passions = ["Boxe", "Fleurs"];
var array = [name, age, passions];
//var array = [12, "Salut", name, age];
console.log(array[2][1]);
*/
/*
var name = "polo";
var age = 40;
var passions = ["Boxe", "Fleurs"];
var array = [name, age, passions];
array[0] = 24;
array[1] = "SUPER";
array[2] [1] = "Cinéma";
console.log(array);
*/
/*
var name = "polo";
var age = 40;
var passions = ["Boxe", "Fleurs"];
var array = [name, age, passions];
//array[0] = 24;
//array[1] = "SUPER";
//array[2] [1] = "Cinéma";
console.log(array[2].length);
console.log(array[0].length);
*/
/*
var monTab = [100,200,300];
var suppr = monTab.pop();
console.log(monTab);
console.log(suppr);
*/
/*
var nom = "Garcia";
var prenom = "José";
var initiales = nom[0] + prenom[0];

var phrase = [];

phrase.push(nom);
phrase.push(prenom);
phrase.push(initiales);

console.log(phrase);
*/

/*
var num = 10
function uneFonction(){
    var num = 9
    console.log(num)
}

uneFonction();
console.log(num)
*/
/*
var noteA = 14;
var noteB = 16;
var moyenne = calcul(noteA, noteB);

function calcul(a, b){
    return (a + b)/2;
}

console.log(moyenne);
*/
/* OU
function moyenne (noteA, noteB){
    return (noteA+noteB)/2;
}

console.log(moyenne(14,16));
*/
/*
var a = 11;
var b = 99;

console.log(a == b);
console.log(a != b);
*/
/*
var age = 11;
var majorite = 18;

console.log(age == majorite ? "OK" : "NON");

var age = 18;
var majorite = 18;
console.log(3 == 3 && 3<4);

function esTuBeau(charisme){
    if(charisme >= 30){
        return "Ca va...";
    }
    else if (charisme <= 10){
        return "Waouw ça craint";
    }
    else{
        return "Non notable";
    }
}
console.log(esTuBeau(50));
*/

/*
function mention(bac){
    var moyenne = (bac[0] + bac[1] + bac[2])/3 //ou bac.length;      
        if(moyenne >= 15){
            return "Très bien";
        }
        else if(moyenne >= 10){
            return "Assez bien";
        }
            return "Refus";
}
console.log(mention([15,8,16]));
*/
/*
var voiture = {
    "nbChevaux": 500,
    "vitesseMax": 450,
    "faiblesse":["accélération","adhérence"]
};
var afficher = "vitesseMax";

console.log(voiture.vitesseMax);
console.log(voiture ["vitesseMax"]);
console.log(voiture [afficher]);
console.log(voiture.faiblesse[1]);
*/
/*
var voiture = {
    "nbChevaux": 500,
    "vitesseMax": 450,
    //"faiblesse": ["accélération","adhérence"]
    "pilotes": ["obama", "trump"]
};

var afficher = "vitesseMax";
voiture.marque = "BMW";
delete voiture.marque;
console.log(voiture.pilotes[1]);
//console.log(voiture);
//console.log(voiture.hasOwnProperty("vitesseMax"));
*/
//OU
/*
var voiture = {
    "nbChevaux": 500,
    "vitesseMax": 450,
    //"faiblesse": ["accélération","adhérence"]
    "pilotes": {pilote: "obama", copilote: "trump"}
};

var afficher = "vitesseMax";
voiture.marque = "BMW";
delete voiture.marque;
console.log(voiture.pilotes.copilote);
//console.log(voiture);
//console.log(voiture.hasOwnProperty("vitesseMax"));
*/
/*
console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture[afficher]);
console.log(voiture.faiblesse[1]);
console.log(voiture);
*/

/*
var i = 0;

while (i <10){
    i++;
    console.log(i);
}
*/
/*
var i = 0;
var dessin = [];


while (i <10){
    i++;
    dessin.push("#");
    console.log(dessin);
}

for (let i = 0 ; i<10 ; i++){
    dessin.push("#")
    console.log(dessin)
}
*/
/*

var dessin2=[];
for(var i = 0; i < 10; i++){
    dessin2.push("#");
    console.log(dessin2);
}


function moyenne (tab) {
    let total = 0;
// on Boucle pour tout additionner    
    for(let i =0; i < tab.length; i++){
        total += tab[i];
    }
// On fait la Division    
    return total / tab.length;
}
console.log(moyenne([10,13,2,3,4,5,18,20]));
*/
/*
function plus(tab) {
    for(var i = 0; i < tab.length; i++){
        for(var j = 0; j < tab[i].length; j++){
            tab[i][j] += 1;
        }
    }
    return tab;
}
console.log(plus([[10,10],[2,2],[3,3]]));


let tab = [1,2,3,4,5,6];

let ajouterUn = tab.map(function(nombre){
    return nombre +1;
})
console.log(tab);
console.log(ajouterUn);
*/
/*
const tab = [1,2,3,4,5];
const plus = tab.map(() => 5);
const maFonction = () => console.log("slt");
maFonction();
*/
/*
let tab = [1,2,3,4,5];

const plus = tab.map(() => 5);
console.log(plus);

//Desanonymiser

const maFonction = () => console.log("slt");

maFonction();

const plus = tab.map(nombre => `${nombre} + 1  = ${nombre + 1}`);
console.log(plus);

function disNom(nom = "Aucun"){
    console.log(nom);
}
disNom();
*/
/*
const Carte = maCarte

const maCarte = taCarte
const taCarte = maCarte

console.log(maCarte("Dracaufeu"), taCarte("Tortank"))
*/
let maCarte = "Dracaufeu";
let taCarte = "Tortank";

let temp = maCarte;
maCarte = taCarte;
taCarte = temp;

//Methode par decomposition 
    //[maCarte, taCarte] = [taCarte, maCarte];

console.log(maCarte,taCarte);
/*
const Carte = {
    maCarte = (Dracaufeu)
    taCarte = (Tortank)
}

const carte{maCarte : "Tortank" , taCarte : "Dracaufeu"}
console.log(maCarte,taCarte)
*/

