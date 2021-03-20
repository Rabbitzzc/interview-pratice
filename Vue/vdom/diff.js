/**
 *1.比较属性的变化

遍历旧的属性,找到被删除和修改的情况

新属性中不存在,旧属性存在,属性被删除
新旧属性中都存在,但是值不同: 属性值被修改 遍历新元素的属性,找到添加的属性
2.比较子元素的变化

3.比较innerHTML的变化

使用pathes 来存储差异
 */

import patch from './patch.js';

function diff(oldTree, newTree) {
    const patches = {};
    const index = {
        value: 0,
    }
    dfsWalk(oldTree, newTree, index, patches);
    return patches;
}


// 比较属性的变化
function diffProps(oldProps, newProps, index, currentIndexPatches) {
    // 遍历旧的属性,找到被删除和修改的情况
    for (const propKey in oldProps) {
        // 新属性中不存在,旧属性存在,属性被删除
        if (!newProps.hasOwnProperty(propKey)) {
            currentIndexPatches.push({
                type: patch.NODE_ATTRIBUTE_DELETE,
                key: propKey,
            })
        } else if (newProps[propKey] !== oldProps[propKey]) {
            // 新旧属性中都存在,但是值不同: 属性被修改
            currentIndexPatches.push({
                type: patch.NODE_ATTRIBUTE_MODIFY,
                key: propKey,
                alue: newProps[propKey],
            })
        }
    }

    // 遍历新元素,找到添加的部分
    for (const propKey in newProps) {
        // 旧属性中不存在,新属性中存在: 添加属性
        if (!oldProps.hasOwnProperty(propKey)) {
            currentIndexPatches.push({
                type: patch.NODE_ATTRIBUTE_ADD,
                key: propKey,
                value: newProps[propKey]
            })
        }
    }
}
// 顺序比较子元素的变化
function diffChildren(oldChildren, newChildren, index, currentIndexPatches, patches) {
    const currentIndex = index.value;
    if (oldChildren.length < newChildren.length) {
        // 有元素被添加
        let i = 0;
        for (; i < oldChildren.length; i++) {
            
            index.value++;
            dfsWalk(oldChildren[i], newChildren[i], index, patches)
        }
        for (; i < newChildren.length; i++) {
            currentIndexPatches.push({
                type: patch.NODE_ADD,
                value: newChildren[i]
            })
        }
    } else {
        // 对比新旧子元素的变化
        for(let i = 0; i< oldChildren.length; i++) {
            index.value++;
            dfsWalk(oldChildren[i], newChildren[i], index, patches)
        }
    }
}
// 比较innerHTML的变化
function dfsWalk(oldNode, newNode, index, patches) {
    const currentIndex = index.value;
    const currentIndexPatches = [];
    
    if(newNode === undefined) { // 节点被移除
        currentIndexPatches.push({
            type: patch.NODE_DELETE,
        })
    } else if(typeof oldNode === 'string' && typeof newNode === 'string') { // 文本节点被修改
        if(oldNode !== newNode) {
            currentIndexPatches.push({
                type: patch.NODE_TEXT_MODIFY,
                value: newNode,
            })
        }
    } else if(oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
        // 同时根据tagName和key来进行对比,如果相同，则需要查看属性值与子类是否变化
        diffProps(oldNode.props, newNode.props, index, currentIndexPatches);
        diffChildren(oldNode.children, newNode.children, index, currentIndexPatches, patches);
    } else {
        // 否则节点被替换
        currentIndexPatches.push({
            type: patch.NODE_REPLACE,
            value: newNode,
        })
    }
    // currentIndexPatches 表示当前节点的变化，利用 currentIndex 记录当前的节点，并拿到对应的变化信息，存储在 patchs 中
    if(currentIndexPatches.length > 0) {
        patches[currentIndex] = currentIndexPatches;
    }
}

export default diff;