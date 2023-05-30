function mergeSort(array) {
  if (array.length === 1) {
    return array
  }

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid, array.length)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArray, rightArray) {
  mergedArray = []
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      mergedArray.push(leftArray.shift())
    } else {
      mergedArray.push(rightArray.shift())
    }
  }
  return [...mergedArray, ...leftArray, ...rightArray]
}

const unsortedArray = [39, 30, 43, 91, 24, 81]
console.log(mergeSort(unsortedArray))
