var pesoInput = document.querySelector('.weigt.peso input');
var altezzaInput = document.querySelector('.weigt.altezza input');
var ans = document.querySelector('.risultato');
var button = document.querySelector('.submit');

button.addEventListener('click', function(){
    var peso = parseFloat(pesoInput.value);
    var altezza = parseFloat(altezzaInput.value);
    
    var ansValue = peso / (altezza * altezza);
    
    ans.innerHTML = "Il tuo indice di massa corporea è: " + ansValue.toFixed(2);
});
