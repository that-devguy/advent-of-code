const fs = require("fs");
const filePath = "input.txt";
const games = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");
// console.log(games);

