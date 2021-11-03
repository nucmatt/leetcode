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

const prices1 = [7,1,5,3,6,4] // 5, p[4] - p[1]
const prices2 = [7,6,4,3,1] // 0

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
