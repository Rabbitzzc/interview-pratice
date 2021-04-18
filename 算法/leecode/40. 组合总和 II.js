const removeSameItem = arr => {
    return [...new Set(arr.map(v => v.join(' ')))].map(v => v.split(' ').map(v => Number(v)))
}

const backtracking = (candidates, target, temp, current, result) => {
    if (current === target) {
        result.push([...temp]);
        return
    }

    for (let i = 0; i < candidates.length; i++) {
        // 如果不使用 set，则可以通过判断当前是否与之前相同
        if (candidates[i] == candidates[i - 1]) continue

        let item = candidates[i];


        if (item + current > target) return

        current += item
        temp.push(item)

        backtracking(candidates.slice(i + 1), target, temp, current, result)

        current -= item
        temp.pop()
    }

}

var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const result = [];
    backtracking(candidates, target, [], 0, result)

    // return removeSameItem(result)
    return (result)
};
// console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([2, 3, 5], 8))
// console.log(combinationSum([2,7,6,3,5,1], 9))

console.log(combinationSum([10,1,2,7,6,1,5],8))
// console.log(combinationSum([2, 5, 2, 1, 2], 5))