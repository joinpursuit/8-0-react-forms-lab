export default function getMode(array) {
  const mappedNums = {};

  array.forEach((num) => {
    if (mappedNums[num]) {
      mappedNums[num] += 1;
    } else mappedNums[num] = 1;
  });

  const max = Math.max(...Object.values(mappedNums));

  for (let prop in mappedNums) {
    if (mappedNums[prop] === max) {
      return prop;
    }
  }
}
