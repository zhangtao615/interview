const url = 'https://7years-img.oss-cn-beijing.aliyuncs.com/-1a8b0a3b98c2e4a9.jpg'

function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function() {
      reject(new Error('图片加载失败'))
    }
    img.src = src
    document.body.appendChild(img)
  })
}
loadImg(url).then(res => {
  console.log(res.width)
}).catch(err => {
  console.log(err)
})