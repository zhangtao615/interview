function max() {
  const nums = Array.prototype.slice.call(arguments)
  let max = 0

  nums.forEach(n => {
    if (n > max) {
      max = n
    }
  })
  return max
}

console.log(max(1, 2, 3, 4, 5, 6));