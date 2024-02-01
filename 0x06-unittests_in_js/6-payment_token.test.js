const { expect } = require('chai')

const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', function () {
  it('response from API', async function () {
    try {
      const res = await getPaymentTokenFromAPI(true)
      expect(res).to.eql({ data: 'Successful response from the API' })
    } catch (err) {
      throw err
    }
  })
})
