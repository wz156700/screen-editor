import BarChart1 from './barChart/bar1.vue'
import BarChart2 from './barChart/bar2.vue'
import polarBar from './barChart/polarBar.vue'

const components = [
    BarChart1,
    BarChart2,
    polarBar
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}