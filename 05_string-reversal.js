// MY METHOD OF DOING THIS PROBLEM
function stringReversal(str) {
  const strArray = str.split('')
  let length = strArray.length
  let reversedArray = []
  for (i = length; i > 0; i--) {
    reversedArray.push(strArray[length - 1])
    length--
  }

  const reversedString = reversedArray.join('')
  console.log(reversedString)
}

// COURSE METHODS

function reverse(str) {
  if (!str || typeof str !== 'string' || str.length < 2) {
    return 'please provide valid string'
  }
  let backwards = []
  const length = str.length - 1
  for (i = length; i >= 0; i--) {
    backwards.push(str[i])
  }
  backwards = backwards.join('')
  return console.log(backwards)
}

function reverse2(str) {
  return str.split('').reverse().join('')
}

const reverse3 = (str) => [...str].reverse().join('')

console.log(reverse3('hello'))
