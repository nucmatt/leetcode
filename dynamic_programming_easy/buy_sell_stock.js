// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
	// base cases
	if (prices.length < 2) return 0;
	// define variables max profit, current buy price
	let maxProfit = 0,
		lowBuyPrice = prices[0];
	// loop through prices array starting at index 1
    for (let i = 1; i < prices.length; i++) {
        // if current price is < current buy price
        if (prices[i] < lowBuyPrice) {
            // current buy price = current price
            lowBuyPrice = prices[i];
        // else
        } else {
            // calculate current profit
            let currProfit = prices[i] - lowBuyPrice;
            // if current profit > max profit
            if (currProfit > maxProfit) {
                // max profit = current profit
                maxProfit = currProfit;
            }
        }
    }
	// once loop completes, return max profit
    return maxProfit;
};

const maxProfit2 = (prices) => {
    // base cases
    if (prices.length < 2) return 0;
    // define variables, minBuy, maxSell
    let minBuy = prices[0], maxSell = prices[1], maxProfit = 0;
    // loop through prices
    for (let i = 1; i < prices.length; i++) {
        // if i < minBuy, minBuy = i, maxSell = i
        if (prices[i] < minBuy) {
            minBuy = prices[i];
            // maxSell must be set to minBuy to ensure the algorithm does NOT look backwards for sell prices BEFORE the buy transaction
            maxSell = minBuy;
        }
        // if i > maxSell, maxSell = i
        if (prices[i] > maxSell) {
            maxSell = prices[i];
        }
        // this comparison(and continually tracking maxProfit generally) is necessary to prevent a future lower buy price resetting the profit from a better prior buy/sell transaction(see prices3 for an example of this condition).
        if (maxProfit < maxSell - minBuy) {
            maxProfit = maxSell - minBuy;
        }
    }
    // return ternary of profit > 0 return profit, else return 0;
    return maxProfit
}

const prices1 = [7,1,5,3,6,4] // 5, p[4] - p[1]
const prices2 = [7,6,4,3,1] // 0
const prices3 = [2,4,1]; // 2, p[1] - p[0]

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
console.log(maxProfit2(prices1));
console.log(maxProfit2(prices2));
console.log(maxProfit2(prices3));
