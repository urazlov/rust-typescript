enum Color {
  Red,
  Green,
  Blue,
  Yellow,
}

function printColor(color: Color) {
  switch (color) {
    case Color.Red:
      console.log("red");
      break;
    case Color.Green:
      console.log("green");
      break;
    case Color.Blue:
      console.log("blue");
      break;
  }
}

printColor(Color.Yellow);
