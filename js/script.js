/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// numero elementi da generare
var nNum = 5;
var numeri = geneRandom(1, 100, nNum);

// mostra numeri a utente
alert("Memorizza questi numeri: \r\n" + numeri);

// tempo dopo il quale si chiede all'utente di inserire i numeri
var time = 3;
setTimeout(askNum, time*1000, nNum);
var frase = "I numeri da ricordare erano: " + numeri;

// genera array di n numeri random unici compresi tra 1 e 100
function geneRandom(min, max, n) {
    var arr = [];
    while (arr.length < n) {
        var numR = Math.floor(Math.random() * (max - min) + min);
        if (!arr.includes(numR)) arr.push(numR);
    }
    return arr;
}

// gioco
function askNum(n) {

    // chiede a utente n volte di inserire un numero valido e non immesso in precedenza
    var nUtente = [];
    var ask = "Inserisci numero";
    while (nUtente.length < n) {
        var numUt = parseInt(prompt(ask));
        if (!nUtente.includes(numUt) && !Number.isNaN(numUt)) {
            nUtente.push(numUt);
            ask = "Inserisci numero";
        }
        else ask = "Numero già inserito o non valido, inseriscine uno diverso";
    }

    frase += "<br>Numeri inseriti: " + nUtente + "<br>Numeri ricordati correttamente:";
    var guessed = 0;

    // confronta numeri utente con quelli generati casualmente
    for (var i = 0; i < numeri.length; i++) {
        if (numeri.includes(nUtente[i])) {
        frase += " " + numeri[i];
        guessed++;
        }
    }

    // mostra quanti e quali numeri sono stati ricordati
    frase += "<br>Hai individuato " + guessed + " numeri!";
    document.getElementById("text").innerHTML = frase;
}
