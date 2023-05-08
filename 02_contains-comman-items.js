// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'g', 'c', 'x']
const array2 = ['n', 'd', 't']

// BAD WAY
// O(a*b) time complexity
// O(1) space complexity

const containsCommonItems = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return console.log(true)
      }
    }
  }
  return console.log(false)
}
containsCommonItems(array1, array2)

// GOOD WAY
// O(a+b) time complexity
// 0(n) space complexity
const containsCommonItems2 = (arr1, arr2) => {
  const array1Map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!array1Map[arr1[i]]) {
      const item = arr1[i]
      array1Map[item] = true
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (array1Map[arr2[j]]) return console.log(true)
  }
  return console.log(false)
}

containsCommonItems2(array1, array2)
