import LineChart1 from './lineChart/line1.vue'
import LineChart2 from './lineChart/line2.vue'

const components = [
    LineChart1,
    LineChart2
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}