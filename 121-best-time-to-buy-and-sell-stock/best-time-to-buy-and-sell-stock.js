/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maximumProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        else {
            let profit = prices[i] - minPrice
            if (profit > maximumProfit) {
                maximumProfit = profit
            }
        }
    }
    return maximumProfit

}