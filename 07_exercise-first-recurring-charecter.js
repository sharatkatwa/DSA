//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// MY SOLUTION O(n^2)- time complexity - hm not good
function firstRecurringCharacter(input) {
  const findingArray = []
  for (let i = 0; i < input.length; i++) {
    if (findingArray.includes(input[i])) {
      return input[i]
    } else {
      findingArray.push(input[i])
    }
  }
  return undefined
}

// COURSE SOLUTION O(n) - time complexity
function firstRecurringCharacter2(input) {
  const map = {}
  for (i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined
}

console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]))
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
