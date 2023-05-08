const array = [4, 2, 9, 8, 3, 5]

// // naive
// const hasPairWithSum = (arr, sum) => {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return console.log(true)
//       }
//     }
//   }
//   return console.log(false)
// }
// hasPairWithSum(array, 8)

// Better
const hasPairWithSum2 = (arr, sum) => {
  const mySet = new Set()
  const len = arr.length
  for (i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return console.log(true)
    }
    mySet.add(sum - arr[i])
  }

  return console.log(false)
}
hasPairWithSum2(array, 5)
