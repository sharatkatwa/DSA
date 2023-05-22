//Implement a function that reverses a string using iteration...and then recursion!

// COURSE SOLUTION
function reverseString(str) {
  if (str === '') {
    return ''
  } else {
    return reverseString(str.substr(1)) + str.charAt(0)
  }
}

console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy'
