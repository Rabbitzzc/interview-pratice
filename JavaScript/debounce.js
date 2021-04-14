// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

const debounce = (fn, delay) => {
    let time = null
    return function () {
        // 在 n 秒以后触发
        clearTimeout(time)
        time = setTimeout(() => fn.apply(this, arguments), delay)
    }
}