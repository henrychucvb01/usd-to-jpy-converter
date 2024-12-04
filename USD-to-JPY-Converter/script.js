async function convertUSDToJPY() {
  const usdAmount = document.getElementById('usdAmount').value;
  
  if (!usdAmount || isNaN(usdAmount)) {
    alert("Please enter a valid USD amount.");
    return;
  }

  const exchangeRates = await getExchangeRates();
  const usdToJpyRate = exchangeRates.USD_to_JPY;
  
  const convertedAmount = (usdAmount * usdToJpyRate).toFixed(2);
  document.getElementById('resultUSDToJPY').textContent = `Converted Amount in JPY: ¥${convertedAmount}`;
}

async function convertJPYToUSD() {
  const jpyAmount = document.getElementById('jpyAmount').value;
  
  if (!jpyAmount || isNaN(jpyAmount)) {
    alert("Please enter a valid JPY amount.");
    return;
  }

  const exchangeRates = await getExchangeRates();
  const jpyToUsdRate = exchangeRates.JPY_to_USD;
  
  const convertedAmount = (jpyAmount * jpyToUsdRate).toFixed(2);
  document.getElementById('resultJPYToUSD').textContent = `Converted Amount in USD: $${convertedAmount}`;
}

async function getExchangeRates() {
  const url = 'https://api.exchangerate-api.com/v4/latest/USD';
  
  const response = await fetch(url);
  const data = await response.json();
  
  // Get USD to JPY and JPY to USD exchange rates
  const usdToJpyRate = data.rates.JPY;
  const jpyToUsdRate = 1 / usdToJpyRate; // Inverse of USD to JPY
  
  return {
    USD_to_JPY: usdToJpyRate,
    JPY_to_USD: jpyToUsdRate
  };
}
