// 1. Creación Básica
let pilaDeLibros = ['Harry Poter', 'Superman', 'Teo va al zoo', 'Jeronimo Estilton']

console.log[pilaDeLibros[0],pilaDeLibros.length]

//2. Gestión de Entradas y Salidas (Push y Pop)
pilaDeLibros.push('cenicienta')
pilaDeLibros.pop()
console.log(pilaDeLibros)

// 3. Prioridad (Unshift)
pilaDeLibros.unshift('Teo va el Parque')

// 4. Extracción de Lotes (Splice)
let librosEstanteria = pilaDeLibros.splice(1, 4)
pilaDeLibros.splice(1,2)
console.log("Pila de libros restante:", pilaDeLibros)
console.log("Libros movidos a estantería:", librosEstanteria)
console.log("Longitud pilaDeLibros:", pilaDeLibros.length)
console.log("Longitud librosEstanteria:", librosEstanteria.length)
