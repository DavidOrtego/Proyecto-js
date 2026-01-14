//listener, da igual el orden en el que lo coloquemos dentro del archivo js
window.addEventListener('DOMContentLoaded', (event) => {  
    console.log('DOMContentLoaded')
    const image = document.getElementById('imagen1')
    console.log(image)
    image.style.display = 'none'

    const title = document.getElementById('titulo')
    title.style.color = 'red'
    title.classList.add('nueva')

    const subtitle = document.getElementsByClassName('subtitulo')
    console.log(subtitle)
    //subtitle[0].style.display = 'none'

    const paragraph = document.getElementsByClassName('parrafo')
    subtitle[0].innerHTML = 'este es el primer parrafo <strong> esto es en negrita</strong>'
    subtitle[1].innerText = 'este es el segundo parrafo <strong> esto es en negrita</strong>'

    //querySelector y querySelectorAll
    const paragraph1 = document.querySelector('.subtitulo.parrafo')
    paragraph1.style.color = 'blue'

    const cuerpo = document.getElementById('cuerpo')
    cuerpo.classList.add('fondo-verde')
    cuerpo.classList.remove('fondo-verde')

    const title_card = document.createElement('h4')
    const content = document.getElementById('contenedor')
    content.appendChild(title_card)
    content.innerText= 'hola '


})

console.log('script-dom.js inicializado')

