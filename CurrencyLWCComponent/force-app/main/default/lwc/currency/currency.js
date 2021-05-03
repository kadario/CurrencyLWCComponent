import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
  greeting = 'World';
  @track showCurrencies = [];

  connectedCallback() {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(response => response.json())
      .then(data => {
        let updatedCurrencyObject = [];

        for (let key in data.rates) {
          updatedCurrencyObject.push({
            'currencyName': key,
            'currencyValue': data.rates[key]
          });
        }

        this.showCurrencies = updatedCurrencyObject;
      });
  }

  changeHandler(event) {
    console.log('hello crypto');
    this.greeting = event.target.value;
  }
}