/**
 * type can be SUM, SUBTRACT, or DIVIDE (string)
 * a and b are numbers
 * When type is SUM, round the two numbers, and add a and b
 * When type is SUBTRACT, round the two numbers, and subtract b from a
 * When type is DIVIDE, round the two numbers, and divide a by b
 */

const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return (Math.round(a) + Math.round(b))
  }
  if (type === 'SUBTRACT') {
    return (Math.round(a) - Math.round(b))
  }
  if (type === 'DIVIDE') {
    if (Math.round(b) !== 0) {
      return (Math.round(a) / Math.round(b))
    } else return ('Error')
  }
}

module.exports = calculateNumber
