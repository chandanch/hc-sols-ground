function migratoryBirds(arr) {
  // Write your code here
  const coutTracker = {};
  arr.forEach((item) => {
    coutTracker[item] ? (coutTracker[item] += 1) : (coutTracker[item] = 1);
  });

  const maxOccurence = Math.max(...Object.values(coutTracker));

  const maxOccuredId = Math.min(
    ...Object.keys(coutTracker).filter(
      (key) => coutTracker[key] === maxOccurence
    )
  );

  return maxOccuredId;
}

const res = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 5, 5, 5, 4, 5, 4]);

console.log(res);
