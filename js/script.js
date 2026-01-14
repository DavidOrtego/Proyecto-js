console.log('Hola, esto es un console.log')

//Tipos de variables
let nombre = 'David'
const NUMERO_PI = 3.14159

console.log('me llamo: ', nombre)
console.log(`mi nombre es ${nombre} y este es ek número pi=${NUMERO_PI}`)
console.log('mi nombre es '+ nombre + ' y este es ek número PI=' +NUMERO_PI)


//number
let telefono = 4444444
let edad = 20

//boolean
let mayor_edad = true
let admin = false
console.log(admin)

let variables; //undefined
let variables_nula = null 

//array
let cursos = ['DAW','DAM']

let persona = {
    nombre: 'David',
    apellidos: 'Ortego Sanz',
    aula: 1,
    horas_lectivas: 14,
    admin: true,
    cursos_tutoria: ['DAW','DAM']
}
console.log(`este es el objeto persona: ${persona}`) //object object
console.log(persona)//pinta el objeto completo
console.log(`este es el objeto persona: ${persona.horas_lectivas}`) //

//array de objetos
let mascotas = [
    {
        animal:'Gato',
        raza: 'gitano',
        nombre:'camaron',
        peso: 5,
        esterilizado: false,
        alimetos: ['pescado']
    },
    {
        animal:'gallo',
        raza: 'gallo',
        nombre:'perico',
        peso: 2,
        esterilizado: false,
        alimetos: ['lo que pille']
    },
    {
        animal:'perro',
        raza: 'pitbul',
        nombre:'franco',
        peso: 7,
        esterilizado: false,
        alimetos: ['carne']
    },
]
console.log('array de mascotas =>', mascotas)
console.log(`Esta es ${mascotas[0].nombre}`)
console.log(mascotas[0])

// tipos y conversiones
let s =14
let tipo_s = typeof(s)
console.log(`la variable ${s} es de tipo ${tipo_s}`)


// trabajando con arrays
let actividades = ['nadar','cocinar','leer','escribir']
console.log(actividades)
console.log(actividades[1])
console.log(actividades.length)

actividades.push('dibujar')
console.log(actividades)
actividades.pop()
console.log(actividades)
actividades.splice(1,2)
console.log(actividades)
console.log(actividades.length)