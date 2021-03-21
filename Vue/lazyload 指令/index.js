Vue.directive('lazyload', {
    bind(el,binding) {
        let lazyObservers = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const img = entry.target
                
                // 如果进入可视区域内---可以自行调整
                const { value = 0} = binding
                const {
                    height=0,
                    src = ''
                } = value
                if(entry.intersectionRatio > height) {
                    img.src = src

                    // 去掉监听
                    lazyObservers.unobserve(img)
                }
            })
        })

        lazyObservers.observer(el)
    }
})