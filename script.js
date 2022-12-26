/*
C'è una lista contenente numeri negativi e positivi.
Mostra nella console con l'aiuto del ciclo for tutti i numeri negativi dalla lista.
*/

const numeri = [-8, 12, 9, -45, -1];

const numeriNegativi = numeri.forEach((el) => {
  if (el < 0) {
    console.log(el);
  }
});

/*
Scriviamo il nostro programma per memorizzare una lista della spesa!🥕
Crea variabili con prodotti varia, poi usando il ciclo for mostra nel console il valore
*/

const spesa = [
  {
    frutta: ["mela", "pera", "arancia", "prugna"],
    verdura: ["carota", "broccoli", "insalata", "pomodoro"],
  },
];

/*
  for ( let i = 0; i < spesa.length ; i++) {
    console.log(spesa[i].frutta)
    console.log(spesa[i].verdura)
  }
  */

const printFruits = spesa.forEach((el) => {
  console.log(el.frutta);
  console.log(el.verdura);
});

// Aggiungi un elemento in nell'array frutta ed uno in verdura

const addFruits = spesa.forEach((el) => {
  el.frutta.push("mandarino");
  el.verdura.push("carciofi");
  console.log(el.frutta, el.verdura);
});

// Genera un array con 5 numeri casuali tra o e 100

const randomNumbers = () => {
  const arrayVuoto = [];
  for (let i = 0; i < 5; i++) {
    arrayVuoto.push(Math.floor(Math.random() * 100));
  }
  return arrayVuoto;
};

console.log(randomNumbers());

/*
Programma che ti dice cosa metti a seconda della temperatura:
● Sotto o uguale a 0 - Fa molto freddo, mettiti una giacca e un cappello
● Sotto o uguale a 12 - Fa freddo, mettiti una giacca
● Sotto o uguale a 25 - E' caldo, divertiti all'aperto!
● Sotto o uguale a 32 - Fa troppo caldo, mettiti un berretto
● Più di 32 - Fa troppo caldo, vai al mare
*/

let temperatura = 33;

if (temperatura <= 0) {
  console.log(`fa molto freddo la temperatura è di ${temperatura} gradi`);
} else if (temperatura <= 12) {
  console.log(
    `Fa freddo, mettiti una giacca la temperatura è di ${temperatura} gradi`
  );
} else if (temperatura <= 25) {
  console.log(`è caldo la temperatura è di ${temperatura} gradi, divertiti`);
} else if (temperatura <= 32) {
  console.log(
    `fa troppo caldo! temperatura è di ${temperatura} gradi, metti un berretto`
  );
} else {
  console.log(
    `la temperatura è di ${temperatura} gradi, stai a casa ed evita l'esposizione al sole`
  );
}
