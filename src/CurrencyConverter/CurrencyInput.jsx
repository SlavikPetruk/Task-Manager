import PropTypes from "prop-types";

const CurrencyInput = ({currencies, amount, currency, onAmountChange, onCurrencyChange}) => {
  return (
  <div className='group'>
    <input type="text" value={amount} onChange={e => onAmountChange(e.target.value)}/>
      <select key={currency} value={currency} onChange={e => onCurrencyChange(e.target.value)} >
      {currencies.map((currency => (
          <option value={currency}>{currency}</option>
        )))}
      </select>
  </div>
  )
}

CurrencyInput.propTypes = {
  currencies: PropTypes.array,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onAmountChange: PropTypes.func, 
  onCurrencyChange: PropTypes.func
}

export default CurrencyInput;
