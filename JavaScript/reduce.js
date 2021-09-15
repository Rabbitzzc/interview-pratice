/**
 * reduce 极简版的实现
 */

Array.prototype.reduce1 = function (reducer, initValue) {
  let res = initValue
  for (let i = 0; i < this.length; ++i) {
    res = reducer(res, this[i], i, this)
  }
  return res
}

const arr = [1, 2, 3, 4]
console.log(arr.reduce1((a, b) => a + b, 0))
