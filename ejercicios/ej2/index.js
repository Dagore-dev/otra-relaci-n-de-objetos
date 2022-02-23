import Garment from './Garment.js'
import Inventory from './Inventory.js'

const pantalon1 = new Garment('pantalon', 'vaquero', 38)
const camisa1 = new Garment('camisa', 'beige', 40)
const camisa2 = new Garment('camisa', 'azul', 39)

const inventory = new Inventory(pantalon1, camisa1, camisa2)

const pantalon2 = ['pantalon', 'rojo', 41]

inventory.addGarment(...pantalon2)

inventory.deleteGarment(camisa1)

inventory.getNumberOfType('pantalon')
inventory.getGarmentsByType('pantalon')

console.log(inventory)
console.log(inventory.getNumberOfType('pantalon'))
console.log(inventory.getGarmentsByType('pantalon'))
