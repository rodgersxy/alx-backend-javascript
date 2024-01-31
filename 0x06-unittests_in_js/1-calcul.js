/**
 * type can be SUM, SUBTRACT, or DIVIDE (string)
 * a and b are numbers
 * When type is SUM, round the two numbers, and add a and b
 * When type is SUBTRACT, round the two numbers, and subtract b from a
 * When type is DIVIDE, round the two numbers, and divide a by b
 */

module.exports = calculateNumber

function calculateNumber (type, a, b) {
  const numberA = Math.round(a)
  const numberB = Math.round(b)

  if (type === 'SUM') {
    return numberA + numberB
  } else if (type === 'SUBTRACT') {
    return numberA - numberB
  } else if (type === 'DIVIDE') {
    return numberA / numberB
  } else {
    throw TypeError
  }
}
