function maxProfit(prices) {
  let profit = 0;
  const max = prices.length - 1;
  // 滑动窗口指针
  let r = max,
    l = max;

  while (l > 0) {
    // 如果价格（从右往左）递减，则 l 指针继续向左移动窗口 
    if (prices[l] > prices[l - 1]) {
      l -= 1;
    } else {
      // 若（从右往左）递增，否则相减得到差值
      profit += prices[r] - prices[l];
      l -= 1;
      r = l;
    }
  }
  // 价格（从右往左）递减，直到第一日的逻辑补充
  if (l !== r) {
    profit += prices[r] - prices[l];
  }

  return profit;
}
