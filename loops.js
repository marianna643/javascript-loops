// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
for (let i =0; i < 3; i++){
    console.log ("Hoera!");
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================
for (let i =0; i < 4; i++) {
    console.log("loop...");
}
    console.log ("klaar!");

// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================
for (var n=0; n<=15; n++) {
    if (n === 0) {
        console.log(n +  " is even");
    }
    else if (n % 2 === 0) {
        console.log(n + " is even");
    }
    else {
        console.log(n + " is oneven");
    }
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================

for (var x=0; x<=9; x++) {
    if (x>2 && x<=5) {
        console.log( ">"+x);
    }
    else if (x>5 && x<10) {
        console.log(">>"+x);
    }
    else {
        console.log(x);
    }
}