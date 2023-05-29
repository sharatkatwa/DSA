function selectionSort(array) {
  let length = array.length
  for (let i = 0; i < length; i++) {
    let smallest = i
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j
      }
    }
    const temp = array[i]
    array[i] = array[smallest]
    array[smallest] = temp
  }
  return array
}

const unsortedArray = [60, 10, 03, 30, 20, 670, 02]
console.log(selectionSort(unsortedArray))
