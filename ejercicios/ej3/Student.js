import EnglishLevel from './EnglishLevel.js'

export default class Student {
  //ATTRIBUTES
  #name
  #age
  #englishLevel

  constructor (name, age, englishLevel) {
    this.setName(name)
    this.setAge(age)
    this.setEnglishLevel(englishLevel)
  }

  //SETTERS
  setName ( name ) {
    if(name && typeof name === 'string') this.#name = name
    else throw '"name" not valid. It has to be a not empty string.'
  }
  setAge ( age ) {
    if (age && typeof age === 'number' && Number.isInteger(age) && age > 0 && age < 100) this.#age = age
    else throw '"age" not valid. It has to be an integer between 0 and 100.'
  }
  setEnglishLevel ( englishLevel ) {
    if (englishLevel && englishLevel instanceof EnglishLevel) this.#englishLevel = englishLevel.symbol
    else throw '"englishLevel" not valid. It only accepts intances of EnglishLevel.'
  }

  //GETTERS
  getName () {
    return this.#name
  }
  getAge () {
    return this.#age
  }
  getEnglishLevel () {
    return this.#englishLevel
  }
}
