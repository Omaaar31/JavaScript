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

const txt = document.querySelector("textarea");
const btn = document.querySelector("button");

txt.addEventListener("keyup", function() {
btn.disabled= txt.value.length >= 5 ? true : false;
});

