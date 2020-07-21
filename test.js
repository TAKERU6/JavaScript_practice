const bottles = [...Array(101).keys()].slice(1);

const freeBottles = bottles.filter((bottle) => bottle % 3 === 0);

const totalBottles = bottles.length + freeBottles.length;

console.log(totalBottles);
