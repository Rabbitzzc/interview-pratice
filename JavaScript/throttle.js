// 节流
// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

const throttle = (fn, delay) => {
    let pre = Date.now()
    let first = true

    return function () {
        const now = Date.now()
        // 满足第一次触发
        if (first && now <= delay) {
            fn.apply(this.arguments)
            pre = Date.now()
            first = false
        }
        if (now - pre >= delay) {
            fn.apply(this, arguments)
            pre = Date.now()
        }
    }
}