let peso = prompt("Peso","")
let altezza = prompt("Altezza","")

let imc = peso / (altezza * altezza);
imc = Math.round(imc);

let classificazione;
if (imc < 18.5) {
    classificazione = "sottopeso";
} else if (imc >= 18.5 && imc < 25) {
    classificazione = "normopeso";
} else if (imc >= 25 && imc < 30) {
    classificazione = "sovrappeso";
} else {
    classificazione = "obeso";
}
let messaggioRisultato = "Il tuo IMC è " + imc + ", classificabile come " + classificazione 
alert(messaggioRisultato)