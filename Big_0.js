const largeArray = Array(10).fill('nemo')

function findNimo(array) {
  const t0 = performance.now()

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found NEMO')
    }
  }
  const t1 = performance.now()
  const result = t1 - t0
  console.log(`total time taken by the function is ${result}ms`)
}

findNimo(largeArray)
