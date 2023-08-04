function sockMerchant(n, ar) {
  // Write your code here
  const uniqueItems = new Set(ar);
  console.log(uniqueItems.size);
  let pairCounter = 0;
  for (let key of uniqueItems.keys()) {
    const items = ar.filter((value) => value === key);
    pairCounter += Math.floor(items.length / 2);
  }
  return pairCounter;
}

const res = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
