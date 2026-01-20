window.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('boton_añadir')
    const list = document.getElementById('lista')
    const input = document.getElementById('tarea_input')
    
addButton.addEventListener('click', () => {
    const textArea = input.value
    if(textArea.trim() !== "") {
        const create_li = document.createElement('li')
        create_li.textContent = textArea
        list.appendChild(create_li)

        input.value = ""
        input.focus()
    }else{
        alert('Añade un valor')
    }
})
})
