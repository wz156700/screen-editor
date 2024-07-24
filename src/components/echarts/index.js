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

//引入饼图
import pieChart1 from './pieChart/pie1.vue'
import pieChart2 from './pieChart/pie2.vue'
import pieChart3 from './pieChart/pie3.vue'

//散点图
import scatterPlot1 from './scatterPlot/scatterPlot1.vue'
import scatterPlot2 from './scatterPlot/scatterPlot2.vue'

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
    lineChart4,

    //饼图部分
    pieChart1,
    pieChart2,
    pieChart3,

    //散点部分
    scatterPlot1,
    scatterPlot2
]

const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component)
    })
}

export default {
    install
}