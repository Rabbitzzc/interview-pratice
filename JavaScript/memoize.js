const memoize = function (fn) {
    // 结果缓存对象 - 可以设置对象属性
    const caches = new Map()
    return function (key) {
        if (caches.get(key) === undefined) caches.set(key, fn.apply(this, arguments))
        return caches.get(key)
    }
}