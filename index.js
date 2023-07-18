function marsExploration(s) {
  // Write your code here
  const letterAccumulator = [];
  let changedCharacterCount = 0;
  for (let i = 0; i <= s.length; i++) {
    if (letterAccumulator.length === 3) {
      if (letterAccumulator[0] !== 'S') {
        changedCharacterCount += 1;
      }
      if (letterAccumulator[1] !== 'O') {
        changedCharacterCount += 1;
      }
      if (letterAccumulator[2] !== 'S') {
        changedCharacterCount += 1;
      }
      letterAccumulator.length = 0;
      letterAccumulator.push(s[i]);
    } else {
      letterAccumulator.push(s[i]);
    }
  }
  return changedCharacterCount;
}

const res = marsExploration('DFGDFGUIOD');

console.log(res);
