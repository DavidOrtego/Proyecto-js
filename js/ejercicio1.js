
// 1. Constantes y Saludos (Strings)
let nombre_libreria = 'Libreria David'
let nombre_gerente = 'David'

console.log(`bienvenido a ${nombre_libreria} soy ${nombre_gerente} el gerente`)

// 2. Tipos de Datos Primitivos
let nobmre_libro ='geronimo stilton'
const número_páginas = 200
let disponible = true
let fecha_de_reimpresión = null
let tomo;

let tipo_numero_pag = typeof(número_páginas)
let tipo_de_titulo = typeof(nobmre_libro)

console.log (`el número de páginas es de tipo ${tipo_numero_pag}`)
console.log (`el nombre del libro es de tipo ${tipo_de_titulo}`)

// 3. Creación de Objetos
let libor_destacado ={
    titulo: 'geronimo stilton',
    autor: 'geronimo',
    precio: 20,
    stock: true,
    categorias: ['Fantasia', 'Ciencia Ficcion', 'Aventuras']
}
console.log(`"El libro ${libor_destacado.titulo} pertenece a la categoría ${libor_destacado.categorias[0]}".`)

// 4. Arrays de Objetos (Catálogo)

let catalogo = [
    {
        titulo: 'harry poter',
        precio: 20,
        stock: true,
    },
    {
        titulo: 'teo va al zoo',
        precio: 15,
        stock: false,
    },
    {
        titulo: 'juego de tronos',
        precio: 25,
        stock: true,
    },
]
console.log(`este es el catalogo de libros`, catalogo)
console.log(catalogo[1].precio)

// 5. Conversión de Tipos
let data = '12.50';
let converteDataToInt = parseInt(data);
let converteDataToFloat = parseFloat(data);

console.log(`
  ${data} ${typeof(data)}, 
  ${converteDataToInt} ${typeof(converteDataToInt)}, 
  ${converteDataToFloat} ${typeof(converteDataToFloat)}`
);
