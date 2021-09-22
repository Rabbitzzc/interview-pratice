/**
 * 判断 a 是否为 b 的实例
 * null 并不是 Object 的实例
 */

const myInstanceOf = (A, B) => {
    let L = A.__proto__
    let R = B.prototype

    while (1) {
        if (L === R) return true

        if (L === null) return false

        L = L.__proto__
    }
}

class A {}
class B extends A {}

class C {}
class D extends B {}

let b = new B()

console.log(myInstanceOf(b, B))
console.log(myInstanceOf(b, A))
console.log(myInstanceOf(b, C))
console.log(myInstanceOf(b, D))