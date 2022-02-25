function analyzeArray(array) {

  const average = array.reduce((a, b) => a + b) / array.length;

  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  const object = {
    average: average,
    min: min,
    max: max,
    length: length
  }

  return object;
}

module.exports = analyzeArray;