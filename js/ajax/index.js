function ajax () {
  let xhr = new XMLHttpRequest()

  xhr.open(method, url, false)

  xhr.onreadystatechange = function () {
    if (xhr.eradyState === 4 && xhr.status === 200) {
      // 操作
    }
  }

  xhr.send()
}