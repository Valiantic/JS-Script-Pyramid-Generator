
// Pyramid Initialization 
const character = "*";
const count = 8;
const rows = [];

// make this false to make the pyramid inverted
let inverted = true;

// Function to pad the row with spaces
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// Check if the pyramid is inverted
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);