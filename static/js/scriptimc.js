const myImage = new Image();
let peso = prompt("Peso","")
let altezza = prompt("Altezza","")

let imc = peso / (altezza * altezza);
imc = Math.round(imc);

let classificazione;
if (imc < 18.5) {
    classificazione = "sottopeso";
    myImage.src = "static/images/imc_sotto.png";
    document.body.appendChild(myImage);
} else if (imc >= 18.5 && imc < 25) {
    classificazione = "normopeso";
    myImage.src = "static/images/imc_normo.png";
    document.body.appendChild(myImage);

} else if (imc >= 25 && imc < 30) {
    classificazione = "sovrappeso";
    myImage.src = "static/images/imc_sovra.png";
    document.body.appendChild(myImage);
} else {
    classificazione = "obeso";
    myImage.src = "static/images/imc_obeso.png";
    document.body.appendChild(myImage);
}
let messaggioRisultato = "Il tuo IMC è " + imc + ", classificabile come " + classificazione 
alert(messaggioRisultato)