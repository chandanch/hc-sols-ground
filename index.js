function strings_xor(firstString, secondString) {
  const firstArr = firstString.split('');
  const secondArr = secondString.split('');
  const resultArr = [];

  firstArr.forEach((element, index) => {
    if (element === secondArr[index]) {
      resultArr.push(0);
    } else if (element || secondArr[index]) {
      resultArr.push(1);
    }
  });
  return resultArr.join('');
}

const res = strings_xor('101010', '001101');

console.log(res);
