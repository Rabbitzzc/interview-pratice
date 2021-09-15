// 节流
// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

const throttle = (fn, delay) => {
  let old = Date.now()
  let first = true
  return function () {
    const now = Date.now()

    if (first && now < delay) {
      first = false
      fn.apply(this, arguments)
      old = Date.now()
    }
    if (now - old >= delay) {
      fn.apply(this, arguments)
      old = Date.now()
    }
  }
}
