// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
let answer = 1
function findFactorialRecursive(number) {
  if (number <= 1) {
    return answer
  }
  answer = answer * number
  return findFactorialRecursive(number - 1)
}
console.log('recursive:', findFactorialRecursive(5))

function findFactorialIterative(number) {
  let answer = 1
  for (let i = 0; i < number; i++) {
    answer = answer * (number - i)
  }
  return answer
}

console.log('iterative:', findFactorialIterative(5))
