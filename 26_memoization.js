// // without memoization (it calculates every time)
// function addTo85(n) {
//   return console.log(n + 85)
// }

// // with memoization (it calculates only when new value is given)
// function memoizeAddTo85() {
//   const cache = {}
//   return function (n) {
//     if (n in cache) {
//       return console.log(cache[n])
//     }

//     console.log('long time')
//     cache[n] = n + 85
//     return console.log(cache[n])
//   }
// }

// const memoized = memoizeAddTo85()

// memoized(5)
// memoized(2)
// memoized(2)
// memoized(5)

// fibonacci without using memoization  O(2^n)
let calculations = 0
function fibonacci(n) {
  calculations++
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(
  'febonacci without memoization:',
  'ans: ' + fibonacci(7),
  'calcs: ' + calculations
)

// fibonacci using memoization O(n)
let calculation2 = 0
function memoizeFibonacci() {
  const cache = {}
  return function fibonacci(n) {
    calculation2++
    if (n in cache) {
      return cache[n]
    }
    if (n < 2) {
      cache[n] = n
      return n
    }
    return (cache[n] = fibonacci(n - 1) + fibonacci(n - 2))
  }
}

const memoizedFib = memoizeFibonacci()

console.log('febonacci with memoization:', 'ans: ' + memoizedFib(7))
console.log('calcs: ' + calculation2)
