// ## PROCEDIMENTO:
// Creare un ciclo for che stampa in console i numeri da 1 a 100

const containerElement = document.getElementById("cont");




for (let i = 1; i <= 100; i++) {

    // fare un if
    // per i numeri che sono sia multipli di "i" (contatore del ciclo) % 3 = 0 and "i" % 5 = 0 allora stampi "FizzBuzz"

    const cardElement = document.createElement('div');
    cardElement.classList.add('card')
    let writeInside;

    if ((i % 3 == 0) && (i % 5 == 0)) {

        console.log('FizzBuzz');
        writeInside = 'FizzBuzz';
        cardElement.style.backgroundColor = "red";

        // altrimenti se è solo multipli di 3 stampi "Fizz"  

    } else if (i % 3 == 0) {

        console.log("Fizz");

        writeInside = ('Fizz');

        cardElement.style.backgroundColor = "#0CD6A1";
       

        // altrimenti se è solo multipli di 5 stampi "Buzz"

    } else if (i % 5 == 0) {

        console.log("Buzz");
        writeInside = ('Buzz');
        cardElement.style.backgroundColor = "#FFD166";
        
        
        // altrimenti stampa solo i numeri
    } else {
        console.log(i);
        writeInside = (i);
        cardElement.style.backgroundColor = "#1389B2";
        
    }

    cardElement.innerHTML = writeInside;
    containerElement.append(cardElement);
}





// ### BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// ### BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.