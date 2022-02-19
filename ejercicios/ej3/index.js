import Course from './Course.js'
import EnglishLevel from './EnglishLevel.js'
import Student from './Student.js'

const student1 = new Student('David', 27, EnglishLevel.B1)
const student2 = new Student('Jesús', 18, EnglishLevel.B2)
const student3 = new Student('Daniel', 19, EnglishLevel.A2)

//Creación correcta
const course = new Course('DAW1', student1, student2, student3)
//const badCourse = new Course('ASIR1', student1, 'Paco', student3)

console.log(course.getName(), course.getNumberOfStudents())

//Eliminar alumno
course.deleteStudent('Jesús')
console.log(course.getName(), course.getNumberOfStudents())

//Añadir alumno
course.newStudent(student2)
console.log(course.getName(), course.getNumberOfStudents())