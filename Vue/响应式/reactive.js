// 建设一个 Dep 管家
class Dep {
    id = null
    static target // a Watcher
    subs = []

    constructor() {
        this.id = uid++ // 唯一标识
        this.subs = []
    }
    addSub(sub: Watcher) { // 增加一个监听
        this.subs.push(sub)
    }
    removeSub(sub: Watcher) { // 去除一个监听
        remove(this.subs, sub)
    }
    depend() {
        if (Dep.target) {
            this.addSub(Dep.target)
        }
    }
    notify() {
        // stabilize the subscriber list first
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}

function defineReactive(data, key, val) {
    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            dep.depend() // 增加依赖
            return val
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }

            dep.notify() // 通知
            val = newVal
        }
    })
}

// 创建一个依赖，并添加到 Deps 里面 - 把自己主动 push 到 data.a.b.c 的 Dep 中去
class Watcher {
    constructor(expOrFn, cb) {
        this.getter = parsePath(expOrFn) // 比如 $watch('a.b.c', cb) 需要解析
        this.cb = cb
        this.value = this.get()
    }

    get() {
        Dep.target = this // 当前 watchr 实例
        value = this.getter.call(vm, vm) // 读取了 getter 的值，触发了 get，所以此时，会将
        Dep.target = undefined
        return value
    }

    // 更新
    update () {
        const oldValue = this.value
        this.value = this.get() // 获取新的 value
        this.cb.call(this.vm, this.value, oldValue)
    }
}