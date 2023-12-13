const fs = require("fs");
const filePath = "input.txt";
const lines = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");
let result = 0;

function expandText(text) {
  let expandedText = text;
  expandedText = expandedText.replaceAll("one", "o1ne");
  expandedText = expandedText.replaceAll("two", "t2wo");
  expandedText = expandedText.replaceAll("three", "t3hree");
  expandedText = expandedText.replaceAll("four", "f4our");
  expandedText = expandedText.replaceAll("five", "f5ive");
  expandedText = expandedText.replaceAll("six", "s6ix");
  expandedText = expandedText.replaceAll("seven", "s7even");
  expandedText = expandedText.replaceAll("eight", "e8ight");
  expandedText = expandedText.replaceAll("nine", "n9ine");

  return expandedText;
}

wordsToNums = lines.map(expandText);
// console.log(wordsToNums);

function filterCalibrationValues(str) {
  numStr = str.replace(/[A-Z]/gi, "");
  calibrationValue = numStr[0] + numStr[numStr.length - 1];
  return calibrationValue;
}

filteredLines = wordsToNums.map(filterCalibrationValues);
// console.log(filteredLines);

for (let i = 0; i < filteredLines.length; i++) {
  result += parseInt(filteredLines[i]);
}

console.log(result);
