const fs = require("fs");
const filePath = "input.txt";
const games = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");
// console.log(games);

const maxColors = {
  red: 12,
  green: 13,
  blue: 14,
};

function parseGames(games) {
  return games
    .map((game) => {
      return game
        .split(": ")[1]
        .split("; ")
        .map((handful) => {
          const pulls = handful.split(", ");
          return pulls.every((pull) => {
            const [count, color] = pull.split(" ");
            //console.log(count, color);
            return maxColors[color] >= Number(count);
          });
        })
        .every((hand) => hand);
    })
    .reduce((s, result, i) => {
      return result ? s + (i + 1) : s;
    }, 0);
}

console.log(parseGames(games));
