// let numArray = [5, 6, 8, 9, 1, 2, 3];
// numArray.sort((a, b) => a - b);
// console.log(numArray);

function sortedSquaredArray(array) {
  array.sort((a, b) => a - b);
  return array.map((num) => num ** 2);
}

let array = [1, 2, 3, 5, 6, 8, 9];

console.log(sortedSquaredArray(array));
