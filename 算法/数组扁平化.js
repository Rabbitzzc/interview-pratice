/**
 * 思路：遍历递归
 */

const flatten = arr => {
    if (arr.length === 0) return []

    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}


const arr = [1, 2, 3]
const arr1 = []
const arr2 = [1, [2, 3], 4]
const arr3 = [1, [2, [4, 5, [6, 7], 8], 9], 10]

console.log(flatten(arr))
console.log(flatten(arr1))
console.log(flatten(arr2))
console.log(flatten(arr3))