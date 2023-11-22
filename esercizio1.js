const nomeUtente=prompt('inserisci ul tuo nome');
const annoDiNascita=parseInt(prompt('il tuo anno di nascita'));

if(annoDiNascita % 4 === 0 && annoDiNascita % 100 !== 0 || annoDiNascita % 400 === 0){
alert(`${nomeUtente} l'anno in cui sei nato/a e bisestile`);

}else {
    alert(`${nomeUtente}, l'anno in cui sei nato/a non è bisestile`);
  }