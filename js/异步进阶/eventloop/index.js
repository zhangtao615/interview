console.log('hi')

setTimeout(() => {
  console.log('cb1')
})

console.log('bye')

console.log('hi')

$('#btn').click(() => {
  console.log('button click')
})

console.log('bye')