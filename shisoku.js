const range = [...Array(101).keys()].slice(1);
const evenRange = range.filter((number) => number % 2 === 0);
const oddRange = range.filter((number) => number % 2 !== 0);

const totalEvenRange = evenRange.reduce((number, sum) => {
  return (sum += number);
}, 0);

const minusOddRange = oddRange.map((range) => range * -1);
const totalOddRange = minusOddRange.reduce((number, sum) => {
  return (sum += number);
}, 0);

const result = totalEvenRange + totalOddRange;

console.log(result);
