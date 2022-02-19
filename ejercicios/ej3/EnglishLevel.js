export default class EnglishLevel {
  static A1 = new EnglishLevel('A1')
  static A2 = new EnglishLevel('A2')
  static B1 = new EnglishLevel('B1')
  static B2 = new EnglishLevel('B1')
  static C1 = new EnglishLevel('C1')
  static C2 = new EnglishLevel('C2')

  constructor(symbol) {
    this.symbol = symbol
  }
}