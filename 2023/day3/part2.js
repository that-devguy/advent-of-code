const fs = require("fs");
const filePath = "input.txt";
const lines = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");

function sumPartNum() {
  let sum = 0;
  let map = [];

  for (let i = 0; i < lines.length; i++) {
    let numbers = [];

    let match;
    let pattern = /\d+/g;
    while ((match = pattern.exec(lines[i])) !== null) {
      numbers.push({
        start: match.index,
        end: pattern.lastIndex - 1,
        number: match[0],
      });
    }
    for (let number of numbers) {
      for (let y = i - 1; y <= i + 1; y++) {
        for (let x = number.start - 1; x <= number.end + 1; x++) {
          if (y >= 0 && y < lines.length && x >= 0 && lines[i].length > x) {
            if (lines[y][x] == "*") {
              map.push({ x, y, number: parseInt(number.number) });
            }
          }
        }
      }
    }
  }
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      let selected = map.filter((el) => el.x == x && el.y == y);
      if (selected.length == 2) {
        let nums = selected.map((el) => el.number);
        sum += nums[0] * nums[1];
      }
    }
  }
  return sum;
}

console.log(sumPartNum());
