class Imc{
    constructor (nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
        this.imc = this.calculImc();
    }
    calculImc(){
        poids = 135;
        taille = 1.89;
        return poids/Math.pow(taille);
    }
    display(){
        console.log(this.imc);
    }
}
let list = [
    new Imc("Sébastien Chabal", 135, 1.89),
    new Imc("Escaladeuse Ultra Svelte", 45, 1.70),]; 

    list.forEach(element => {element.display();})