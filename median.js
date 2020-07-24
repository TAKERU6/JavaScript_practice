const numbers = [4, 1, 2];

const range = numbers.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

const maxNumber = numbers.reduce((a, b) => (a > b ? a : b));
const minNumber = numbers.reduce((a, b) => (a < b ? a : b));
const median = numbers.filter(
  (number) => number < maxNumber && number > minNumber
);

console.log(median);
