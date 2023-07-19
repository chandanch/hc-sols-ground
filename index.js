function zigzagSequence(arr) {
  arr = arr.sort((a, b) => a - b);
  const maxNumber = arr[arr.length - 1];
  const middleElem = (arr.length + 1) / 2;
  [arr[middleElem - 1], arr[arr.length - 1]] = [
    arr[arr.length - 1],
    arr[middleElem - 1],
  ];

  const leftElems = arr.slice(0, middleElem - 1);
  const rightElems = arr.slice(middleElem, arr.length).sort((a, b) => b - a);

  console.log(arr, maxNumber, middleElem, leftElems, rightElems);

  console.log(`Res: ${[...leftElems, maxNumber, rightElems]}`);
}

zigzagSequence([1, 2, 3, 4, 5, 6, 7]);
