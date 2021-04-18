const backtracking = (candidates, target, temp, current, result) => {
    if (current === target) {
        result.push([...temp]);
        return
    }

    for (let i = 0; i < candidates.length; i++) {
        let item = candidates[i];

        if (item + current > target) return

        current += item
        temp.push(item)

        backtracking(candidates.slice(i), target, temp, current, result)

        current -= item
        temp.pop()
    }

}

var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const result = [];
    backtracking(candidates, target, [], 0, result)

    return result
};

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([2,7,6,3,5,1], 9))