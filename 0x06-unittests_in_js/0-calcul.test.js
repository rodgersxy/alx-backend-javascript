/* global describe, it */

const calculateNumber = require('./0-calcul')
const assert = require('assert')
const mocha = require('mocha')

describe('calculateNumber', () => {
  it('should return the sum of a and b', () => {
    assert.strictEqual(calculateNumber(2, 5), 7)
    assert.strictEqual(calculateNumber(2.2, 5.7), 8)
    assert.strictEqual(calculateNumber(2.7, 6), 9)
    assert.strictEqual(calculateNumber(2.2, 5.7), 8)
    assert.strictEqual(calculateNumber(-2, -1), -3)
    assert.strictEqual(calculateNumber(-2.4, -5.7), -8)
    assert.strictEqual(calculateNumber(0, 0), 0)
  })
})
