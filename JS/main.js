// ## PROCEDIMENTO:
// Creare un ciclo for che stampa in console i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    // fare un if
    // per i numeri che sono sia multipli di "i" (contatore del ciclo) % 3 = 0 and "i" % 5 = 0 allora stampi "FizzBuzz"

    if ((i % 3 == 0) && (i % 5 == 0)) {

        let j = i;
        console.log(j = 'FizzBuzz');

        // altrimenti se è solo multipli di 3 stampi "Fizz"  

    } else if (i % 3 == 0) {

        console.log("Fizz");


        // altrimenti se è solo multipli di 5 stampi "Buzz"

    } else if (i % 5 == 0) {

        console.log("Buzz");

        // altrimenti stampa solo i numeri
    } else {
        console.log(i);
    }

}




// ### BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// ### BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.