const fs = require("fs");
const filePath = "input.txt";
const lines = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");
let result = 0;

function filterCalibrationValues(str) {
  numStr = str.replace(/[A-Z]/gi, "");
  calibrationValue = numStr[0] + numStr[numStr.length - 1];
  return calibrationValue;
}

filteredLines = lines.map(filterCalibrationValues);

// console.log(filteredLines);

for (let i = 0; i < filteredLines.length; i++) {
  result += parseInt(filteredLines[i]);
}

console.log(result);
