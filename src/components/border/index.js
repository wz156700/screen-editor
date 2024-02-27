import APBorder1 from './border1/index.vue'

const components = [
    APBorder1
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}