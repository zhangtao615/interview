function flatten(arr) {
  // 判断数组中是否还有数组
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  } else {
    const res = Array.prototype.concat.apply([], arr)
    return flatten(res)
  }
  
}

console.log(flatten([1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, [13]]]]]))