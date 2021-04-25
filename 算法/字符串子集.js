const backtracking = (str, result,temp,start) =>{
    result.push(temp);

    for(let i = start; i<str.length; i++) {
        const sss = temp // 比 slice 性能更好
        temp +=  str[i]
        backtracking(str, result, temp, ++start)
        // temp = temp.slice(0,-1)
        temp = sss
    }
}


const strSubsets = str => {
    if (str.length === 0) return ['']

    if (str.length === 1) return ['', str]

    const result = []

    backtracking(str, result, '', 0)

    return result
}


console.log(strSubsets('abc'))