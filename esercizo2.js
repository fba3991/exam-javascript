const stringheConLaA =(stringa)=>{
let stingaVuota='';/* creato per poi aggiungere elemti di stringa */
for(let i=0; i<stringa.length; i++){
    if(stringa[i][0].toUpperCase() === 'A'){/* [0] creato per indicare il primo indice della stringa */
     stingaVuota +=stringa[i];
    }
    if (stingaVuota.length >10){
     /* non ho capito come svolgere la parte di troncare la stringa */
    }
}
return stingaVuota
}
const arrayDiStringhe= ['Albero',  'Macchina',  'Luce',  'Asfalto',  'Bottiglia',  'arma',  'arte'];
const risultato = stringheConLaA(arrayDiStringhe);
console.log(risultato);