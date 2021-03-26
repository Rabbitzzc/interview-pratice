/***
 * 通过数据，这样就是 O(n) 空间，题目需要满足 O(1) 空间
 */
 var backspaceCompare = function(S, T) {
    let a = []
    let b = []

    for(let i = 0; i < S.length; i++) {
        if(S[i] === '#') {
            a.pop()
        } else {
            a.push(S[i])
        }
    }
    for(let i = 0; i < T.length; i++) {
        if(T[i] === '#') {
            b.pop()
        } else {
            b.push(T[i])
        }
    }
    return a.join('') === b.join('')
};

// S = "ab##", T = "c#d#"
// S = "ab#c", T = "ad#c"
// S = "a##c", T = "#a#c"
S = "a#c", T = "b"
console.log(backspaceCompare(S,T))