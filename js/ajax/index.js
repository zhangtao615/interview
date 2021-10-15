// 手写ajax
function ajax () {
  let xhr = new XMLHttpRequest()

  xhr.open(method, url, true)

  xhr.onreadystatechange = function () {
    if (xhr.eradyState === 4 && xhr.status === 200) {
      // 操作
    }
  }

  xhr.send()
}

// jsonp实现

window.callback = (data) => {
  console.log(data)
}

