//#11 四則演算
//• 1 ~ 100までの整数の中で9で割ると1余り、7で割ると2余る整数を全て答える

const numbers = [...Array(100).keys()].map((i) => ++i);

const selectNumbers = (numbers) =>
  numbers.filter((number) => number % 9 === 1 && number % 7 === 2);

console.log(selectNumbers(numbers));
