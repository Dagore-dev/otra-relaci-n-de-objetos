import Garment from './Garment.js'

export default class Inventory {
  //ATTRIBUTES
  #garmentList = []

  constructor ( ...garments ) {
    this.#tryAdd(garments)
  }
  
  //GETTERS
  getGarmentsByType ( type ) {
    return this.#garmentList.filter(garment => garment.getType() === type)
  }
  getNumberOfType ( type ) {
    return this.getGarmentsByType(type).length
  }
  //SETTERS
  addGarment ( garment ) {
    if (garment instanceof Garment) {
      this.#garmentList = this.#garmentList.concat(garment)
    }
    else {
      throw '"garment" not valid. Not a Garment instance'
    }
  }
  addGarment ( type, color, size ) {
    try {
      const garment = new Garment(type, color, size)
      this.#garmentList = this.#garmentList.concat(garment)
    }
    catch (error) {
      throw error
    }
  }
  deleteGarment ( garmentToDelete ) {
    this.#garmentList = this.#garmentList.filter(garment => !garment.equals(garmentToDelete))
  }
  deleteGarmentByType ( type ) {
    this.#garmentList = this.#garmentList.filter(garment => garment.getType() !== type)
  }
  deleteGarmentByColor ( color ) {
    this.#garmentList = this.#garmentList.filter(garment => garment.getColor() !== color)
  }
  deleteGarmentBySize ( size ) {
    this.#garmentList = this.#garmentList.filter(garment => garment.getType() !== size)
  }
  #tryAdd ( garments ) {
    let temp = []

    garments.forEach( ( garment, i) => {
      if ( garment instanceof Garment ) temp.push(garment)
      else throw `Argument at position ${i}. It is not a Garment instance.`
    })

    this.#garmentList = this.#garmentList.concat(temp)
  }

}
