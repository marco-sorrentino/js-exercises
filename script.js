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