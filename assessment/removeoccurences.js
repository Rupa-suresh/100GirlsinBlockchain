let array = [1, 2, 3, 1, 4, 6, 4, 4];
let number = 4;
function removeOccurrences(array, number) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== number) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let result = removeOccurrences(array, number);
console.log(result);
