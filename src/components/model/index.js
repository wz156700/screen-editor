
import Model1 from './components/model1.vue'
const components = [
    Model1
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}