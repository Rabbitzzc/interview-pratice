const backtracking = (queue, temp = [], result) => {
    if (queue.length === 0) {
        result.push([...temp]);
        return
    }

    for (let i = 0; i < queue.length; i++) {
        const item = queue.shift();
        temp.push(item);
        backtracking(queue, temp, result)

        temp.pop() // 少了一行代码
        queue.push(item)
    }
}


const removeSameItem = arr=>{
    return [...new Set(arr.map(v=>v.join(' ')))].map(v=>v.split(' ').map(v=>Number(v)))
}
const permuteUnique = nums => {
    const result = [];

    const queue = [...nums]

    backtracking(queue, [], result)

    return removeSameItem(result)
}

console.log(permuteUnique([1, 2, 2]))