const cryptoApi = 'https://api.coincap.io/v2/assets';

function append(element) {
    const rank = document.getElementById('rank');
    const newElement = document.createElement('li');
    newElement.innerText = element;
    newElement.classList.add('cryptocoin');
    rank.appendChild(newElement);
}

function createTop10(data) {
    for (let i = 0; i <= 9; i += 1) {
        const element = 
        ` Name: ${data.data[i].name};
          Rank: ${data.data[i].rank};
          Price(usd): ${data.data[i].priceUsd}.
        `;
        append(element);
    }
}

async function fetchApi() { 
  const response = await fetch(cryptoApi);
  const data = await response.json();
  createTop10(data);
}

window.onload = fetchApi;
