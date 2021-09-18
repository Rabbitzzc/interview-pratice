/**
 * destructuringArray( [1,[2,4],3], "[a,[b],c]" ) ===>  { a:1, b:2, c:3 }
 * 思路：这个肯定涉及正则
 * 
 */
function destructuringArray(arr, str) {
    let parent = [];
    let parentIndex = [];
    let index = 0;
    let current = arr;
    let obj = {};
    let key = "";
    for (let i = 1, l = str.length; i < l; i++) {
        switch (str[i]) {
            case ",":
                if (key !== "") {
                    obj[key] = current[index];
                    key = "";
                    index++;
                }
                break;
            case "[":
                parent.push(current);
                parentIndex.push(index);
                current = current[index];
                index = 0;
                break;
            case "]":
                if (key !== "") {
                    obj[key] = current[index];
                    key = "";
                }
                current = parent.pop();
                index = parentIndex.pop() + 1;
                break;
            default:
                key += str[i];
        }
    }
    return obj;
}