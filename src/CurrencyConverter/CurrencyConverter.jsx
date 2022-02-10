import axios from 'axios';
import { useEffect, useState } from 'react';
import CurrencyInput from './CurrencyInput';
import './CurrencyConverter.css'


const CurrencyConverter = () => {

    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('USD')
    const [rates, setRates] = useState([])

    useEffect(() => {
        axios.get('http://data.fixer.io/api/latest?access_key=0ce522574c9b9c51f85813161ed6c284')
          .then(response => {
            setRates(response.data.rates);
          })
      }, []);

    const format = number => number.toFixed(2)

    const hundleAmount1Change = amount1 => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setAmount1(amount1)
    }

    const hundleCurrency1Change = currency1 => {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]))
        setCurrency1(currency1)
    }

    const hundleAmount2Change = amount2 => {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setAmount2(amount2)
    }

    const hundleCurrency2Change = currency2 => {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]))
        setCurrency2(currency2)
    }


  return (
  <>
      <h1>Currency Converter</h1>
      <div className="inputCurrency">
      <CurrencyInput 
                currencies={Object.keys(rates)}
                onAmountChange={hundleAmount1Change}
                onCurrencyChange={hundleCurrency1Change}
                amount={amount1}
                currency={currency1} />
      <CurrencyInput 
                currencies={Object.keys(rates)}
                onAmountChange={hundleAmount2Change}
                onCurrencyChange={hundleCurrency2Change}
                amount={amount2} 
                currency={currency2}/>
    </div>
  </>
  );
};

export default CurrencyConverter;
