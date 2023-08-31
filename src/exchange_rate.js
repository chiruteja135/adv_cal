import React, { useState, useEffect } from 'react';

const CurrencyConverter = ({ theme }) => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('INR');
  
  useEffect(() => {
    const appId = '731ff1c1a95843aab188529da2da9054';
  
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${appId}`)
      .then(response => response.json())
      .then(data => {
        if (data.rates) {
          setExchangeRates(data.rates);
        } else {
          console.error("Error fetching exchange rates:", data.error);
        }
      })
      .catch(error => {
        console.error("Error fetching exchange rates:", error);
      });
  }, []);
  
  const handleAmountChange = event => {
    const newAmount = parseFloat(event.target.value);
    setAmount(newAmount || 0); // Ensure it's a valid number
  };

  const handleSourceCurrencyChange = event => {
    setSourceCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = event => {
    setTargetCurrency(event.target.value);
  };

  const convertedAmount = (amount * exchangeRates[targetCurrency]) / exchangeRates[sourceCurrency];

  return (
    <div className={`currencyConverter ${theme === 'light' ? 'light' : 'dark'}`}>
      <h1>Currency Converter</h1>
      <div>
        <input className='ccinput' type="number" value={amount} onChange={handleAmountChange} />{' '}
        <select className='fromandtoinput' value={sourceCurrency} onChange={handleSourceCurrencyChange}>
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>to</span>
        <select className='fromandtoinput' value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className='result'>
        {amount.toFixed(2)} {sourceCurrency} is approximately{' '}
        {convertedAmount.toFixed(2)} {targetCurrency}
      </div>
    </div>
  );
};

export default CurrencyConverter;
