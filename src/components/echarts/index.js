import BarChart1 from './barChart/bar1.vue'
import BarChart2 from './barChart/bar2.vue'
import BarChart3 from './barChart/bar3.vue'
import polarBar from './barChart/polarBar.vue'
import polarBar2 from './barChart/polarBar2.vue'

const components = [
    BarChart1,
    BarChart2,
    BarChart3,
    polarBar,
    polarBar2
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}