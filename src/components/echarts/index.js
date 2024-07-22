//引入柱状图
import BarChart1 from './barChart/bar1.vue'
import BarChart2 from './barChart/bar2.vue'
import BarChart3 from './barChart/bar3.vue'
import BarChart4 from './barChart/bar4.vue'
import polarBar from './barChart/polarBar.vue'
import polarBar2 from './barChart/polarBar2.vue'

//引入折线图
import lineChart1 from './lineChart/line1.vue'
import lineChart2 from './lineChart/line2.vue'
import lineChart3 from './lineChart/line3.vue'
import lineChart4 from './lineChart/line4.vue'

const components = [
    //柱状图部分
    BarChart1,
    BarChart2,
    BarChart3,
    BarChart4,
    polarBar,
    polarBar2,
    //折线图部分
    lineChart1,
    lineChart2,
    lineChart3,
    lineChart4
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}