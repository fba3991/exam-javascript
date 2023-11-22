window.addEventListener('load', () => {
    const input = document.getElementById('inputText');
    const button = document.getElementById('addButton');
    const p = document.getElementById('errorMessage');
    const ul = document.getElementById('tasks');


    button.addEventListener('click', () => {
        const testo = input.value;
        
        if (testo === '') {    
            p.innerText = 'Per favore, inserisci del testo'
        } else{
            p.innerText=''; 
        }

        const li = document.createElement('li');
        li.innerHTML += testo;
        input.value='';
        ul.appendChild(li);
        
    });


});