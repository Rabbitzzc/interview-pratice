/**
 * 用 JS 表示 dom
 */

export default class Node {
    constructor(tagName, ...args) {
        this.tagName = tagName

        // 判断是否存在样式
        if(Array.isArray(args[0])) {
            // 属性值
            this.props = {}
            this.children = args[0]
        } else {
            // 属性值
            this.props = args[0]
            this.children = args[1]
        }

        // void 0 防止 undefined 被重新复制，保证代码正确赋值为原始的 undefined
        this.key = this.props.key || void 0
    }

    // 跟 vue 相似，将 模板解析成对象，然后渲染
    render() {
        const $dom  = document.createElement(this.tagName)

        // 样式渲染
        for(const key in this.props) $dom.setAttribute(key,this.props[key])

        // 子节点添加
        if(this.children && Array.isArray(this.children)) {
            this.children.forEach(child => {
                if(child instanceof Node) $dom.appendChild(child.render())
                else $dom.appendChild(document.createTextNode(child)) // 字体则表示渲染 innerHTML
            })
        }
        return $dom
    }
}