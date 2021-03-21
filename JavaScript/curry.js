function add(a, b,c,d,e,f,g) {
    return a + b + c + d + e + f + g;
}


// const curry = fn => judge = (...args) => args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg)

function curry(fn, ...args) {
    // 当参数与 fn 的参数相同，则直接执行函数
    if (args.length >= fn.length) {
        return fn(...args)
    }
        // 否则返回函数，合并参数，并继续自动柯里化
    return function (...args2) {
        return curry(fn, ...args, ...args2)
    }
}

let  curryAdd = curry(add)


console.log(curryAdd(1)(2)(3)(4,5,6)(7))
console.log(curryAdd(1)(2)(3)(4,5,6)(7))
console.log(curryAdd(1)(2)(3)(4)(5)(6)(7))