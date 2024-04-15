document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var peso = parseFloat(document.getElementById("peso").value);
    var altezza = parseFloat(document.getElementById("altezza").value);
    var età = parseInt(document.getElementById("età").value);
    
    var imc = peso / (altezza * altezza);
    imc = Math.round(imc);
    
    var classificazione;
    if (imc < 18.5) {
        classificazione = "sottopeso";
    } else if (imc >= 18.5 && imc < 25) {
        classificazione = "normopeso";
    } else if (imc >= 25 && imc < 30) {
        classificazione = "sovrappeso";
    } else {
        classificazione = "obeso";
    }
    
    
    var messaggioRisultato = "Il tuo IMC è " + imc + ", classificabile come " + classificazione 
    document.getElementById("risultato").innerText = messaggioRisultato;
});