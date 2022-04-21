const currenciesApi = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
const cryptoApi = 'https://api.coincap.io/v2/assets';

function append(element) {
    const rank = document.getElementById('rank');
    const newElement = document.createElement('li');
    newElement.innerText = element;
    newElement.classList.add('cryptocoin');
    rank.appendChild(newElement);
}

function createTop10(data, currencyData) {
    for (let i = 0; i <= 9; i += 1) {
        const element = 
        ` Name: ${data.data[i].name};
          Rank: ${data.data[i].rank};
          Price(USD): ${data.data[i].priceUsd};
          Price(BRL): ${data.data[i].priceUsd * currencyData.usd.brl}.
        `;
        append(element);
    }
}

async function fetchApi() { 
  const response = await fetch(cryptoApi);
  const data = await response.json();
  const currencyResponse = await fetch(currenciesApi);
  const currencyData = await currencyResponse.json();
  createTop10(data, currencyData);
}

window.onload = fetchApi;
