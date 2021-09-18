const calTags  = () => {
    const  tags = document.querySelectorAll('*').map(v=>v.tagName).filter(v=>v)
    return (new Set(tags)).size()
}