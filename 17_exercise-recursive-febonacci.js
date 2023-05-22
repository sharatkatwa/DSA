// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let num1 = 0
  let num2 = 1
  let ans
  if (n === 0) return 0
  if (n === 1) return 1
  for (let i = 0; i < n - 1; i++) {
    ans = num1 + num2
    num1 = num2
    num2 = ans
  }

  return ans
}
// console.log(fibonacciIterative(3))

// MY SOUTION
let num1 = 0
let num2 = 1
let ans
function fibonacciRecursive(n) {
  if (n < 2) return n

  function fibonacci(n) {
    if (n <= 1) return ans

    ans = num1 + num2
    num1 = num2
    num2 = ans
    return fibonacci(n - 1)
  }
  return fibonacci(n)
}

// COURSE SOLUTION
function fibonacciRecursive2(n) {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive2(n - 1) + fibonacciRecursive2(n - 2)
}

console.log(fibonacciRecursive2(5))
