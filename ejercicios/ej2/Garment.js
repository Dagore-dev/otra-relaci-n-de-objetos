export default class Garment {

  #type
  #color
  #size

  constructor ( type, color, size ) {
    this.#type = type,
    this.#color = color,
    this.#size = size
  }

  //GETTERS
  getType () {
    return this.#type
  }
  getColor () {
    return this.#color
  }
  getSize () {
    return this.#size
  }

  //METHODS
  equals ( obj ) {
    let isEqual = false

    if (obj instanceof Garment && obj.getType() === this.getType() && obj.getColor() === this.getColor() && obj.getSize() === this.getSize()) {
      isEqual = true
    }

    return isEqual
  }

}
