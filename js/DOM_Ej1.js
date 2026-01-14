window.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('#boton')

boton.addEventListener('click',() =>{
    if(boton.textContent === 'Encender'){
        document.body.style.backgroundColor = 'yellow'
        boton.textContent ='Apagar'
    }else{
        document.body.style.backgroundColor = 'white'
        boton.textContent ='Encender'
    }
})
})