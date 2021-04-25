const backtracking = (queue, temp = [], result, last) => {
    if (queue.length === 0) {
        result.push([...temp]);
        return
    }

    for (let i = 0; i < queue.length; i++) {
        // 增加一行代码，不需要使用 Set
        if (queue.lastIndexOf(queue[i]) !== i) continue

        const item = queue.shift();
        temp.push(item);
        backtracking(queue, temp, result, item)

        temp.pop() // 少了一行代码
        queue.push(item)
    }
}


const removeSameItem = arr => {
    return [...new Set(arr.map(v => v.join(' ')))].map(v => v.split(' ').map(v => Number(v)))
}
const permuteUnique = nums => {
    const result = [];

    const queue = [...nums]

    backtracking(queue, [], result)

    return (result)
}

console.log(permuteUnique([1, 1,2]))