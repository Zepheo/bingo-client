export default function arrayShuffle(array) {
  const tempArr = [...array]
  for (let i = tempArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
  }
  return tempArr;
}