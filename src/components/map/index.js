
import Map1 from './components/map1.vue'
const components = [
    Map1
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}