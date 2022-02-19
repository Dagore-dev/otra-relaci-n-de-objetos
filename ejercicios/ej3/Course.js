import Student from './Student.js'

export default class Course {
  //ATTRIBUTES
  #name
  #students = []

  constructor ( name, ...students ) {
    this.setName(name)
    this.#tryAdd(students)
  }

  //SETTERS
  setName ( name ) {
    if ( name && typeof name  === 'string' ) this.#name = name
    else throw '"name" is not valid. It has to be a not empty string.'    
  }
  newStudent ( student ) {
    if ( student instanceof Student ) this.#students.push(student)
    else throw 'Not a Student instance'
  }
  deleteStudent ( studentName ) {
    this.#students = this.#students.filter(student => student.getName() !== studentName)
  }
  #tryAdd ( students ) {
    let temp = []

    students.forEach( ( student, i) => {
      if ( student instanceof Student ) temp.push(student)
      else throw `Argument at position ${i}. It is not a Student instance.`
    })

    this.#students = this.#students.concat(temp)
  }

  //GETTERS
  getName () {
    return this.#name
  }
  getNumberOfStudents () {
    return this.#students.length
  }
  getStudentByName ( studentName ) {
    return this.#students.find(student => student.getName() === studentName)
  }

}