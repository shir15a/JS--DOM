const btn = document.querySelector('.btn');
const smileysNumber = document.querySelector('.number');
const ul = document.querySelector('ul');

btn.addEventListener('click', ()=>{
    ul.innerHTML = "";
    for(let i=0; i<parseInt(smileysNumber.value);i++){
        let img = document.createElement("img");
        img.src = 'https://fruitvalley.co.il/wp-content/uploads/2019/10/apple-red_150678029.jpg'
        let li = document.createElement("li");
        li.appendChild(img);
        ul.appendChild(li);
        ul.style.listStyle = 'none';

    }
})

