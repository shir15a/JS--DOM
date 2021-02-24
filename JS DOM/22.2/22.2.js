const checkbox = document.querySelector('#check')

checkbox.addEventListener('change', ()=>{
    const img = document.createElement('img')
    img.src  = 'https://fruitvalley.co.il/wp-content/uploads/2019/10/apple-red_150678029.jpg'
    if(checkbox.checked){
        document.body.appendChild(img);
    }
    else {
        const imgToDelete = document.querySelector('img')
        imgToDelete.remove();
    }
})

