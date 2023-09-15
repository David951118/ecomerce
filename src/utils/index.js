/**
 * @param {Array} products  cartProduct: Array of Objects
 * @returns {number} Total Price
 */

export const totalPrice = (array) => {
  let total = 0
  let prices = array.map(product => product.price)
  prices.forEach(price => total += price)
  return total
}
