function muti(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}
const nums = [1, 2, 3, 4, 5, 6]

// nums.forEach(async item => {
//   const res = await muti(item)
//   console.log(res)
// })
!(async function() {
  for (let i of nums) {
    const res = await muti(i)
    console.log(res)
  }
})()