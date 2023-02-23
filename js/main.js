/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). */


//Elementi del form
let formNome= document.querySelector('#form-nome');
let formKm= document.querySelector('#form-tratta');
let formEta= document.querySelector('#form-eta');
let prezzo = formKm.value * 0.21;

// Elementi buttons
let formGenera = document.getElementById('form-genera');
let formAnnulla = document.getElementById('form-annulla');

// Elementi Biglietto
let biglNome = document.getElementById('ticket-nome');
let biglCosto = document.getElementById('ticket-costo');
let biglOfferta = document.getElementById('ticket-offerta');
let biglCarrozza = document.getElementById('ticket-carrozza');
let biglCodiceCp = document.getElementById('ticket-codice');

// Eventi Click Genera
formGenera.addEventListener('click', function(){
    let prezzo = formKm.value * 0.21;
    offerta = 'Prezzo standard';
    console.log(prezzo);

    if (formEta.value == 'min') {
        prezzo = (prezzo- (prezzo * 0.2));
        let offerta = 'Sconto minorenni';
    }else if (formEta.value == 'over') {
        prezzo = (prezzo - (prezzo * 0.4));
    }

    // Genera n° Carrozza
    let carrozza = Math.floor(Math.random() * 10) + 1;
    // Genera CodiceCP
    let codiceCp = Math.floor(Math.random() * 1000) + 1;

     // Genera contenuto biglietto
     biglNome.innerHTML = formNome.value; //Nome passeggero
     biglCosto.innerHTML = prezzo.toFixed(2) + ' Euro'; //Costo biglietto
     biglOfferta.innerHTML = offerta; //Tipologia offerta
     biglCarrozza.innerHTML = carrozza; //N° carrozza
     biglCodiceCp.innerHTML = codiceCp; //N° codice CP
})


