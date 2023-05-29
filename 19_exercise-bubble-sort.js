function bubbleSort(array) {
  let length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const unsortedArray = [60, 10, 30, 20, 670, 02]
console.log(bubbleSort(unsortedArray))
