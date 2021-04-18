const backtracking = (queue, temp=[], result) => {
    if(queue.length === 0) {
        result.push([...temp]);
        return
    }

    for(let i = 0; i < queue.length; i++) {
        const item = queue.shift();
        temp.push(item);
        backtracking(queue, temp, result)
        
        temp.pop() // 少了一行代码
        queue.push(item)
    }
}

const permute = nums => {
    const result = [];

    const queue = [...nums]

    backtracking(queue, [], result)

    return result
}

fn([1,2,2])