import * as fs from "fs";

fs.readFile("./lines.txt", "utf8", (err, data) => {
  if (err) return;

  data
    .split("\n")
    .filter((_, i) => i % 2 === 0)
    .filter((_, i) => i > 1 && i < 4)
    .forEach((line) => console.log(line));
});
