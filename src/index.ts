import fs from "fs";

function printLines() {
  const file = process.argv[2];
  fs.readFile(`./${file}`, (err, data) => {
    if (err) console.log(err);

    data
      .toString()
      .split("\n")
      .forEach((line) => {
        let print = parseInt(line);
        if (isNaN(print)) {
          console.log("line not a number");
          return;
        }
        console.log(print);
      });
  });
}

printLines();
