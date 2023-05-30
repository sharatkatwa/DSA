function insertionSort(array) {
  const length = array.length
  for (i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0])
    } else {
      for (j = 1; j < i; j++) {
        if (array[j - 1] < array[i] && array[j] > array[i]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
  return array
}

const unsortedArray = [60, 10, 03, 30, 20, 670, 02]
console.log(insertionSort(unsortedArray))
