/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
var n = 5;
var numeri = geneRandom(1, 100, n);
var nUtente = [];
var time = 3;
alert("Memorizza questi numeri: \r\n" + numeri);
setTimeout(askNum, time*1000);
var frase = "I numeri da ricordare erano: " + numeri;

function askNum() {
    var ask = "Inserisci numero";
    while (nUtente.length < n) {
        
        var numUt = parseInt(prompt(ask));
        if (!nUtente.includes(numUt)) {
            nUtente.push(numUt);
            ask = "Inserisci numero";
        }
        else ask = "Numero già inserito, inseriscine uno diverso";

    }

    frase += "<br>Numeri inseriti: " + nUtente + "<br>Numeri ricordati correttamente:";
    var guessed = 0;

    for (var i = 0; i < numeri.length; i++) {
        if (numeri.includes(nUtente[i])) {
        frase += " " + numeri[i];
        guessed++;
        }
    }

    frase += "<br>Hai individuato " + guessed + " numeri!";
    document.getElementById("text").innerHTML = frase;
}

function geneRandom(min, max, n) {

    var arr = [];
    
    while (arr.length < n) {
        var numR = Math.floor(Math.random() * (max - min) + min);
        if (!arr.includes(numR)) arr.push(numR);
    }
    return arr;
}
