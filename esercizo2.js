const stringheConLaA = (stringa) => {
  let stingaVuota =
    ""; /* la utiliziamo per accumulare le stringhe che iniziano con A */

  for (let i = 0; i < stringa.length; i++) {
    /* attraversa array di stringhe passato come argomento */
    if (stringa[i][0].toUpperCase() === "A") {
      /* controlliamo se il primo indice della stringa contenga A */
      stingaVuota +=
        stringa[i]; /* aggiungiamo stringhe con A all'array vuoto */
    }
    /* if (stingaVuota.length >10){
          non ho capito come svolgere la parte di troncare la stringa 
        } */
  }
  return stingaVuota; /* risultato della funzione */
};
const arrayDiStringhe = [
  "Albero",
  "Macchina",
  "Luce",
  "Asfalto",
  "Bottiglia",
  "arma",
  "arte",
];
const risultato =
  stringheConLaA(
    arrayDiStringhe
  ); /* richiamo della funzione e dell' array di strignhe */
console.log(risultato);
