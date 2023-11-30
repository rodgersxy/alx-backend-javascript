import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this.setCurrency(currency);
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this.setCurrency(currency);
  }

  setCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError(`${currency} must be of type Currency`);
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
