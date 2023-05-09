// MY SOLUTION not Completed
const mergeSortedArrays = (arr1, arr2) => {
  const sortedArray = []
  let j = 0

  sortedArray.push(arr1[i])
  console.log(sortedArray)
}
// [0`, 3, 4, 31], [ 4, 6, 30]

// [0,3,3,4,]

// // // //
// const mergeSortedArrays2 = (arr1, arr2) => {
//   let solArr = []
//   let i = 0,
//     j = 0
//   if (arr1.length == 0) return arr2
//   if (arr2.length == 0) return arr1
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) solArr.push(arr1[i++])
//     else solArr.push(arr2[j++])
//   }
//   while (i < arr1.length) solArr.push(arr1[i++])
//   while (j < arr2.length) solArr.push(arr2[j++])
//   return solArr
// }

// const arr1 = [0, 3, 4, 31]
// const arr2 = [3, 4, 6, 30]
// console.log(mergeSortedArrays2(arr1, arr2))

// COURSE SOLUTION
function mergeSortedArrays2(arr1, arr2) {
  if (arr1.length === 0) {
    return console.log(arr2)
  }
  if (arr2.length === 0) {
    return console.log(arr1)
  }
  const mergedArray = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]

  let i = 1
  let j = 1

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      mergedArray.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }

  console.log(mergedArray)
}
mergeSortedArrays2([0, 3, 4, 31], [3, 4, 6, 30])
