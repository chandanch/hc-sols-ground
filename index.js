function plusMinus(arr) {
  // Write your code here
  const ratioConter = {
    postiveCount: 0,
    negativeCount: 0,
    zeroCount: 0,
  };
  arr.forEach((value) => {
    if (value > 0) {
      ratioConter.postiveCount += 1;
    } else if (value < 0) {
      ratioConter.negativeCount += 1;
    } else {
      ratioConter.zeroCount += 1;
    }
  });

  console.log(
    `${(ratioConter.postiveCount / arr.length).toFixed(6)}\n ${(
      ratioConter.negativeCount / arr.length
    ).toFixed(6)}\n ${(ratioConter.zeroCount / arr.length).toFixed(6)}\n`
  );
}

const res = plusMinus([1, 2, -1, -3, 0, 3]);
