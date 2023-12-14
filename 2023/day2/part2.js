const fs = require("fs");
const filePath = "input.txt";
const games = fs.readFileSync(filePath, "utf8").replace(/\r/g, "").split("\n");
// console.log(games);

function parseGames(games) {
  return games
    .map((game) => {
      const maxCount = {
        red: 0,
        green: 0,
        blue: 0,
      };

      game
        .split(": ")[1]
        .split("; ")
        .forEach((handful) => {
          const pulls = handful.split(", ");
          return pulls.forEach((pull) => {
            const [count, color] = pull.split(" ");
            //console.log(count, color);
            if (maxCount[color] < Number(count)) {
              maxCount[color] = Number(count);
            }
          });
        });
      return maxCount.red * maxCount.green * maxCount.blue;
    })
    .reduce((s, v) => s + v);
}

console.log(parseGames(games));
