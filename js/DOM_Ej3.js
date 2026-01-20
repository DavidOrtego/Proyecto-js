window.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password')

password.addEventListener('input', () => {
    if(password.value.length < 8) {
        password.style.borderColor = 'red'
    } else {
        password.style.borderColor = 'green'
    }
})
})