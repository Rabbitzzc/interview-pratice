/**
 * 用 JS 描述树状结构
 */

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

/**
 * 二叉搜索树BST：是二叉树中的一种，但是只允许我们在左侧节点存储比父节点更小的值，在右侧节点存储比父节点大的值
 */
const defaultCompare = (a, b) => {
    if (a === b) {
        return 0
    }
    return a < b ? -1 : 1
}

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {

        // 表示两个数据之间的大小比较，可以自定义
        this.compareFn = compareFn
        this.root = null
    }
    // 插入 key
    insert(key) {
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    // 插入 Node
    insertNode(node, key) {
        // node.key < key right 插入
        if(this.compareFn(node.key,key) > 0) {
            if(node.left == null ) node.left = new Node(key)
            else this.insertNode(node.left, key)
        } else {
            if(node.right == null ) node.right = new Node(key)
            else this.insertNode(node.right, key)
        }
    }
    //查找 key - 二分查找
    search(key) {
        return this.searchNode(this.root,key)
    }
    searchNode(node,key) {
        if(node !== null) {
            if(this.compareFn(node.key,key) === 0) {
                return node
            } else if(this.compareFn(node.key,key) > 0) {
                return this.searchNode(node.left, key)
            } else {
                return this.searchNode(node.left, key)
            }
        }
    }
    // 移除 key
    remove(key) {
        this.removeNode(this.root, key)
    }
    removeNode(node,key) {
        if(node !== null) {
            if(this.compareFn(node.key,key) === 0) {
                node = null
            } else if(this.compareFn(node.key,key) > 0) {
                this.removeNode(node.left, key)
            } else {
                this.removeNode(node.left, key)
            }
        }
    }
    // 遍历 前序 中序 后续
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback){ 
        if(node !== null){
            // 中 左  ------> 右
            callback(node.key)
            this.preOrderTraverseNode(node.left,callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback) {
        // 左 中 后
        if(node !== null) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback)
    }
    postOrderTraverseNode(node, callback) {
        // 左   右 中
        if(node !== null) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    // 最小值
    min(){
        // 其实就是最左边的值
        return this.minNode(this.root)
    }
    minNode(node){
        if(node !== null && node.left !== null) {
            return this.minNode(node.left)
        } else {
            return node
        }
    }
    // 最大值
    max(){
        return this.maxNode(this.root)
    }
    maxNode(node){
        if(node !== null && node.right !== null) {
            return this.maxNode(node.right)
        } else {
            return node
        }
    }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

// console.log(tree)

const cl = (node) => console.log(node)

// tree.preOrderTraverse(cl)
// tree.inOrderTraverse(cl)
// tree.postOrderTraverse(cl)

// const min = tree.min()
// const max = tree.max()
// console.log(min.key)
// console.log(max.key)

console.log(tree.search(3))

