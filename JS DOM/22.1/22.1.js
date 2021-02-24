const btn = document.querySelector('button')
const name = document.querySelector('.name')
const age = document.querySelector('.age')
const email = document.querySelector('.email')

btn.addEventListener('click', () => {
    const ans = confirm('name is: ' + name.value + ' age: ' + age.value + ' email: ' + email.value + ' Confirm to continue');
    if (ans) {
        alert('congratulations you successfully sent this form')
    }
})



