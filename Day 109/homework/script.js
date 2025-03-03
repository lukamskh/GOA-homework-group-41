document.body.innerHTML = `<button>SUP???</button>`;

function priceUp(prices, increase) {
  for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] + increase;
  }
  console.log(prices);
}

priceUp([10, 11, 12], 10);
