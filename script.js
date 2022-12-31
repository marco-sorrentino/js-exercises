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

/*
Scriviamo un programma che aiuterà gli utenti a seguire le regole del traffico 🚙
Diciamo che in un paese bisogna rispettare le seguenti regole:
● Tutti i bambini sotto ai 7 anni possono viaggiare solo in seggiolini di sicurezza;
● I bambini tra i 7 e i 12 anni possono viaggiare nel sedile posteriore senza un
seggiolino di sicurezza;
● Dai 12 anni in poi, è possibile viaggiare nel sedile anteriore;
● Chi ha compiuto 18 anni può guidare una macchina.
*/

let anni = 18;

switch (true) {
  case anni < 7:
    console.log(
      "Tutti i bambini sotto ai 7 anni possono viaggiare solo in seggiolini di sicurezza"
    );
    break;
  case anni >= 7 && anni < 12:
    console.log(
      "I bambini tra i 7 e i 12 anni possono viaggiare nel sedile posteriore senza un seggiolino di sicurezza"
    );
    break;
  case anni > 12 && anni < 18:
    console.log(
      "Dai 12 anni in poi, è possibile viaggiare nel sedile anteriore"
    );
    break;
  default:
    console.log("puoi guidare da solo");
}

/*
Scriviamo un programma che aiuta l'utente a capire se dorme bene. In una variabile metti ore dormite, per poi emettere un messaggio su una routine sana.
Se la routine del sonno soddisfa le raccomandazioni (dalle 7 alle 10 ore), il seguente messaggio verrà mandato in output: "La tua routine del sonno è normale".
Se il sonno dura meno di 7 ore, verrà visualizzato il messaggio "Dormi poco". Se l'utente dorme per piu' di 10 ore, il programma emetterà il messaggio "Dormi troppo".
Hai fatto tutto? Ben fatto!
1. Chiedere all'utente per quanto tempo utilizza il computer. Se sono più di 7 ore, sono oberati di lavoro
*/

let oreSonno = 0;

switch (true) {
  case oreSonno < 7:
    console.log("dormi troppo poco");
    break;
  case oreSonno >= 7 && oreSonno <= 10:
    console.log("La tua routine del sonno è normale");
    break;
  case oreSonno > 10:
    console.log("dormi troppo");
    break;
}

// controllo biglietto cinema

let annoBiglietto = 0;

if (annoBiglietto < 7) {
  console.log("Il biglietto è gratuito");
} else {
  console.log("Mi spiace, devi comprare biglietto");
}

// manipola array

const tasks = [
  {
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 15,
  },
  {
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 89,
  },
  {
    todo: "Watch a classic movie",
    completed: false,
    userId: 89,
  },
  {
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 89,
  },
  {
    todo: "Solve a Rubik's cube",
    completed: false,
    userId: 89,
  },
  {
    todo: "Bake pastries for me and neighbor",
    completed: false,
    userId: 89,
  },
  {
    todo: "Go see a Broadway production",
    completed: false,
    userId: 89,
  },
  {
    todo: "Write a thank you letter to an influential person in my life",
    completed: true,
    userId: 15,
  },
  {
    todo: "Invite some friends over for a game night",
    completed: false,

    userId: 89,
  },
  {
    todo: "Have a football scrimmage with some friends",
    completed: false,
    userId: 89,
  },
  {
    todo: "Text a friend I haven't talked to in a long time",
    completed: false,
    userId: 89,
  },
  {
    todo: "Organize pantry",
    completed: true,
    userId: 15,
  },
  {
    todo: "Buy a new house decoration",
    completed: false,
    userId: 89,
  },
  {
    todo: "Plan a vacation I've always wanted to take",

    completed: false,
    userId: 89,
  },
  {
    todo: "Clean out car",
    completed: false,
    userId: 89,
  },
  {
    todo: "Draw and color a Mandala",
    completed: true,
    userId: 15,
  },
  {
    todo: "Create a cookbook with favorite recipes",
    completed: false,
    userId: 89,
  },
  {
    todo: "Bake a pie with some friends",
    completed: false,
    userId: 89,
  },
  {
    todo: "Create a compost pile",
    completed: true,
    userId: 15,
  },
  {
    todo: "Take a hike at a local park",
    completed: true,
    userId: 15,
  },
  {
    todo: "Take a class at local community center that interests you",
    completed: false,
    userId: 89,
  },
  {
    todo: "Research a topic interested in",
    completed: false,
    userId: 89,
  },
  {
    todo: "Plan a trip to another country",
    completed: true,
    userId: 15,
  },

  {
    todo: "Improve touch typing",
    completed: false,
    userId: 89,
  },
  {
    todo: "Learn Express.js",
    completed: false,
    userId: 89,
  },
  {
    todo: "Learn calligraphy",
    completed: false,
    userId: 89,
  },
  {
    todo: "Have a photo session with some friends",
    completed: false,
    userId: 89,
  },
  {
    todo: "Go to the gym",
    completed: false,
    userId: 89,
  },
  {
    todo: "Make own LEGO creation",
    completed: false,
    userId: 89,
  },
  {
    todo: "Take cat on a walk",
    completed: false,
    userId: 89,
  },
];
