const fs = require("fs");
const filePath = "input.txt";
const lines = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");

function sumPartNum() {
  let sum = 0;

  for (let i = 0; i < lines.length; i++) {
    let numbers = [];

    let match;
    let pattern = /\d+/g;
    while ((match = pattern.exec(lines[i])) !== null) {
      numbers.push({
        start: match.index,
        end: pattern.lastIndex,
        number: match[0],
      });
    }
    for (let number of numbers) {
      let partOfSum = false;
      for (let y = i - 1; y <= i + 1; y++) {
        for (let x = number.start - 1; x <= number.end; x++) {
          if (y >= 0 && y < lines.length && x >= 0 && lines[i].length > x) {
            if (isNaN(parseInt(lines[y][x])) && lines[y][x] != ".") {
              partOfSum = true;
            }
          }
        }
      }
      if (partOfSum) {
        sum += parseInt(number.number);
      }
    }
  }
  return sum;
}

console.log(sumPartNum());
