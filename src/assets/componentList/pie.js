// 图表
const pies = [
    {
        name: '',
        value: 1,
        children: [
            {
                type: 'pieChart1', // 组件名
                mark: 'pieChart1', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '普通饼图',
                uuid: 'A1',
                image: "/public/img/pie1.png",
                isShow: true
            },
            {
                type: 'pieChart2', // 组件名
                mark: 'pieChart2', // 配置数据的名字
                fabricType: 'rect',
                width: 450, // 初始化大小
                height: 450, // 
                name: '圆角饼图',
                uuid: 'A1',
                image: "/public/img/pie2.png",
                isShow: true
            },
            {
                type: 'pieChart3', // 组件名
                mark: 'pieChart3', // 配置数据的名字
                fabricType: 'rect',
                width: 500, // 初始化大小
                height: 500, // 
                name: '基础南丁格尔玫瑰图',
                uuid: 'A1',
                image: "/public/img/pie3.png",
                isShow: true
            }
        ]
    }
]

export default pies
