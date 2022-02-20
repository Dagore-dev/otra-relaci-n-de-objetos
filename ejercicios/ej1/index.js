function Person ( nombre, apellidos, edad ) {
  
  let _age = edad

  function getEdad() {
    return _age
  }
  function agePlusOne () {
    _age++
  }

  return {
    nombre,
    apellidos,
    getEdad,
    agePlusOne
  }
}

function printPerson ( { nombre, apellidos, getEdad } ) {
  const $P = document.createElement('p')
  const $TEXT = document.createTextNode(
    `${nombre} ${apellidos}, ${getEdad()} años.`
  )
  
  $P.appendChild($TEXT)
  document.body.appendChild($P)
}

const person1 = Person('Pepe', 'Fernandez García', 39)
person1.agePlusOne()
printPerson(person1)

const person2 = Person('Lucía', 'García Gómez', 42)
person2.agePlusOne()
printPerson(person2)
