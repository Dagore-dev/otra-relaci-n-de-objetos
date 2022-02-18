export default class Garment {

  #type;
  #color;
  #size;

  constructor ( type, color, size ) {
    this.#type = type,
    this.#color = color,
    this.#size = size
  }

  getType () {
    return this.#type
  }

  getColor () {
    return this.#color
  }

  getSize () {
    return this.#size
  }

}
