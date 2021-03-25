/**
 * 数组交集
 */
const intersection = (a, b) => a.filter(v => b.includes(v))

// 并集
const union = (a, b) => a.concat(b.filter(v => !a.includes(v)))

// 差集
const difference = (a, b) => a.concat(b).filter(v => !a.includes(v) || !b.includes(v))