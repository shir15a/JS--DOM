const age = document.querySelector('.age');
const p = document.createElement("P");


const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    if (age.value > 18) {
        p.innerText = "you can drink appear"
        document.body.appendChild(p);  
    }
    else {
        p.innerText = "you’re too young"
        document.body.appendChild(p);  

    }
})

