/*
const titre = document.getElementsByTagName("h1");
console.log(titre);
*/
/*
const titre = document.getElementById("titre");
console.log(titre);
*/
/*
let titre = document.getElementById("titre");
let txt = document.getElementsByTagName("p");

document.body.insertBefore(txt[0],titre);

console.log(titre);
*/
/*
let titre = document.getElementById("titre");
let txt = document.getElementsByTagName("p");

document.body.appendChild(titre);

console.log(titre);
*/
/*
let titre = document.getElementById("titre");
let txt = document.getElementsByTagName("p");

document.body.removeChild(titre);
console.log(document.body)
*/
/*
const titre = document.getElementById("titre");
const txt = document.getElementsByTagName("p");
const newTxt = document.createTextNode("Bienvenue");

document.body.appendChild(newTxt);
//console.log(document.body);

//document.body.replaceChild(newTxt,txt[0]);
//console.log(document.body);
*/
/*
function ajoutTexte(pseudo,texte){
    let newTxt2 = document.createElement("p");
    newTxt2.innerHTML = `<strong>${pseudo}</strong>  = ${texte}`;
    document.body.appendChild(newTxt2);
}

console.log(document.body);

ajoutTexte("JOSé", "AZERTYUIOP");
ajoutTexte("COCO", "Wejdene");
ajoutTexte("eiffel65", "Blue Dabeudi dabeuda");
ajoutTexte("Cristaline", "eau de source");
ajoutTexte("EPSON", "Rétro Projecteur");
*/
/*
const lien = document.getElementsByTagName("a")[0];
const titre2 = document.getElementById("titre");
//a = BALISE

lien.setAttribute("href","https://www.super.com/");
lien.getAttribute("href");
titre2.getAttribute("id");
//href,id = ATTRIBUTS

let afficherLien = lien.getAttribute("href");
let afficherTitre = titre2.getAttribute("id");

//console.log(lien.getAttribute("href"));
//console.log(titre.getAttribute("id"))
console.log(afficherLien,afficherTitre);
*/
/*      
//  OU
const titre = document.getElementById("titre");
const txt = document.getElementsByTagName("p");

const lien = document.getElementsByTagName("a")[0];

lien.setAttribute("href", "https://www.super.com");
console.log(titre.getAttribute("id"));
console.log(lien.getAttribute("href"));

/*
const titre = document.getElementById("titre");
const txt = document.getElementsByTagName("p");

texteTab = Array.from(txt);

texteTab.map(txt => txt.innerHTML = "LOL on t'as HACKED!");
*/
/*
const titre = document.getElementById("titre");
const txt = document.getElementsByTagName("p");
const texteTab = Array.from(txt);
texteTab.map(txt => txt.innerHTML = "LOL ON a HACKED LORDI");
*/
/*
const titre = document.getElementById("titre"); 

const h = document.getElementById("titre").offsetHeight;
const w = document.getElementById("titre").offsetWidth;
const client = document.getElementById("titre").offsetWidth;

console.log(h,w,client)
// OU
//console.log(titre.offsetHeight, titre.offsetWidth, titre.clientWidth);
*/
/*
const titre = document.getElementById("titre");


titre.style.color = "red";
titre.style.fontFamily = "impact";
titre.style.boxShadow = "2px 2px 20px green";
*/
/*
const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");



liens[0].addEventListener("click", function(){
    titre.classList.add("maCouleur")
})
*/
/*
const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");


liens[0].addEventListener("click", function(){
    titre.classList.add("maCouleur")
});

liens[1].addEventListener("click", function(){
    titre.classList.remove("maCouleur")
});

liens[2].addEventListener("click", function(){
    titre.classList.toggle("maCouleur")
})
*/

// Version plus courte
/*
const link = document.querySelector("a")

function monClic(){
    console.log("Bonjour")
    //link.removeEventListener("click",monClic) => pour eviter d'appeler plusieurs fois le EventListener
}

link.addEventListener("click",monClic)
*/
/*
const titre = document.querySelectorAll("#titre");

function goTitre(titre){
    const dist = titre.offsetTop;
    window.scrollTo(0, dist);
}
goTitre(titre[7])
*/
/*
window.addEventListener("keypress", (event) => {
    console.log(event.key);
});
*/
/*
let titre = document.querySelector("#titre");

addEventListener("mouseout", function() {
    titre.style.display = "block";
})
*/
/*
const txt = document.querySelector("textarea");
const btn = document.querySelector("button");

txt.addEventListener("keyup", function() {
btn.disabled= txt.value.length >= 5 ? true : false;
});
*/
/*
let input = document.querySelector("input");

input.addEventListener("focus", function(){
    input.style.backgroundColor="blue";
});

input.addEventListener("blur", function(){
    input.style.backgroundColor="white";
});
*/
/*
let img = document.querySelectorAll("img");
let tabImg = Array.from(img);

tabImg.map((image, i) => image.addEventListener("load", function(){
    console.log(`img Num : ${i} - Chargement Finis`);
}));
*/
/*
let bar = document.querySelector(".bar");

addEventListener("scroll", function(){
    console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${pageYOffset}`);
});

addEventListener("scroll", function(){
    let scrollMax = document.body.scrollHeight - innerHeight;
    let onEstOu = pageYOffset/scrollMax*100;
    bar.style.width = onEstOu + "%"
});
*/
/*
let titre = document.querySelector("h1");

let txt = setTimeout(function(){
    titre.textContent = "Salut";
    titre.style.opacity=1;
    document.body.style.backgroundColor="red";
},2000);
*/
/*
let titre = document.querySelector("h1");
let timer = 3;

titre.addEventListener("click", function(){
    let countDown = setInterval(function(){
        if(timer > 0){
            titre.textContent = timer;
        }
        else {
            titre.textContent = "GO GO GO";
            clearInterval(countDown);
        }
        console.log(timer);
        timer--; 
    },2000)
});
*/
/*
addEventListener("click",function(unEvent){
    let monImg = document.createElement("img");
    let taille = 200;

    monImg.setAttribute("src","https://loremflickr.com/200/200");

    monImg.style.position = "absolute";
    monImg.style.left = unEvent.x - taille /2 + "px";
    monImg.style.top = unEvent.y - taille /2 + "px";
    
    document.body.appendChild(monImg);
    console.log(unEvent);
    console.log(unEvent.x, unEvent.y);
});
*/
/*
let monTxt = document.querySelector("textarea");
let rendu = document.querySelector("div");

monTxt.addEventListener("keyup", function() {
    rendu.innerHTML = monTxt.value;
    rendu.innerHTML = marked(monTxt.value)
});
*/
/*
let monTxt = document.querySelector("textarea");
let rendu = document.querySelector("div");

monTxt.addEventListener("keyup", function() {
    if(monTxt.value){
        rendu.innerHTML = localStorage.getItem("monSuperTexte");
    }
    localStorage.setItem( "monSuperTexte", monTxt.value,);
    rendu.innerHTML = marked(monTxt.value);
});
*/

// OU
/*
const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("div");
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
monTxt.value = localStorage.getItem("monSuperTexte");

//Si monTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if (monTxt.value) {
    rendu.innerHTML = localStorage.getItem("monSuperTexte");
}
//On détecte ce que tape l'utilisateur dans le textarea
monTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
    localStorage.setItem("monSuperTexte", monTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
    rendu.innerHTML = marked(monTxt.value);
});
*/
/*
let monForm = document.querySelector("form");

monForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK");
    console.log(event);
    monForm.reset();
});
*/
/*
let counter = document.querySelector("h2");
let majCounter = async function myFunction() {
    let data = await fetch("https://api.countapi.xyz/hit/salut/aurevoir");
    console.log(data);
    let count = await data.json();
    console.log(count);
    counter.innerHTML = count.value;
    counter.style.filter="blur(0)";
}
majCounter();
*/
/*
let leTexte = document.querySelector("textarea");
let txt = [];
let voyelles = ["a","e","i","o","u","y"];

leTexte.addEventListener("keypress", function(unEvent){
    let uneTouche = unEvent.key;

    if(!voyelles.includes(uneTouche)){
        txt.push(uneTouche);
    }
    console.log(txt.join("-"));
})
*/