export default class Inventory {

  #GarmentList = []

  constructor ( garments ) {
    this.#GarmentList = [this.#GarmentList, ...garments]
  }

  

}
