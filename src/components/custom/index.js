// 自定义小部件
import apWviewText1 from './text/ap-view-span.vue'

const components = [
    apWviewText1
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}