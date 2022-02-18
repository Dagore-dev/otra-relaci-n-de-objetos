function Person ( nombre, apellidos, edad ) {
  
  function agePlusOne () {
    this.edad++;
  }
  
  return { nombre, apellidos, edad , agePlusOne}
}

function printPerson ( { nombre, apellidos, edad } ) {
  const $P = document.createElement('p')
  
  $P.innerText = (`
    ${nombre},
    ${apellidos},
    ${edad}
  `)

  document.body.appendChild($P)
}

const person1 = Person('Pepe', 'Fernandez García', 39)
person1.agePlusOne()
printPerson(person1)

const person2 = Person('Lucía', 'García Gómez', 42)
person2.agePlusOne()
printPerson(person2)
