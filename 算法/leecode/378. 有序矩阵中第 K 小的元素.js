var kthSmallest = function(matrix, k) {
    let a = []
    matrix.forEach(v=>a.push(...v))
    a.sort((a,b)=>a-b)
    return a[k-1]
};

// matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8

// matrix = [[1,5,9],[10,11,13],[12,13,15]]
// matrix = [[1,5,9],[10,11,13],[12,13,15]]
matrix = [[-5]]
console.log(kthSmallest(matrix,1))