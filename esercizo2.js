const stringheConLaA =(stringa)=>{
let stingaVuota='';
for(let i=0; i<stringa.length; i++){
    if(stringa[i][0].toUpperCase() === 'A'){/
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