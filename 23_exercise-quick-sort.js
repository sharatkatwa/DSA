const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function quickSort(array, left, right) {
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)

    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
}

function partition(array, pivot, left, right) {
  pivotValue = array[pivot]
  partitionIndex = left

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      const temp = array[i]
      array[i] = array[partitionIndex]
      array[partitionIndex] = temp

      partitionIndex++
    }
  }

  // swap pivot with partition index to set the right position of pivot
  const temp = array[partitionIndex]
  array[partitionIndex] = array[right]
  array[right] = temp

  return partitionIndex
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)
