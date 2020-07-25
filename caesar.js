const strings = "HALLO";

const caesars = (strings) => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const getUpperCaseStrings = strings.toUpperCase();
  let rot_13_words = strings.split("").map((string) => {
    let number = alphabets.indexOf(string);
    let add_thirteen_number = number <= 12 ? number + 13 : number - 13;
    return alphabets[add_thirteen_number];
  });
  return rot_13_words.join("");
};

console.log(caesars(strings));
