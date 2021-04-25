// '('，')'，'{'，'}'，'['，']'
var isValid = function (s) {
    let temp = []
    let flag = true
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            temp.push(s[i])
        } else {
            const item = temp.pop()
            if (s[i] === ')' && item !== '(') {
                flag = false
                break
            }
            if (s[i] === '}' && item !== '{') {
                flag = false
                break
            }
            if (s[i] === ']' && item !== '[') {
                flag = false
                break
            }
        }
    }
    if(temp.length) flag =false
    return flag
};