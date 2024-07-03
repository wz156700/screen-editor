import { descriptionProps } from "element-plus";
import { keyBy } from "lodash-es";

// 图表
export const LineChart1 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [
                {
                    name: "x轴文本颜色",
                    type: "el-color-picker",
                    field: "xColor",
                    default: "#fff",
                },
                {
                    name: "x轴文字大小",
                    type: "el-input-number",
                    field: "xfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "x轴名称",
                    type: "el-input",
                    field: "xcontent",
                    default: "",
                },
                {
                    name: "x轴名称颜色",
                    type: "el-color-picker",
                    field: "xcontentColor",
                    default: "#fff",
                },

                {
                    name: "y轴文本颜色",
                    type: "el-color-picker",
                    field: "yColor",
                    default: "#fff",
                },
                {
                    name: "y轴文字大小",
                    type: "el-input-number",
                    field: "yfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "y轴名称",
                    type: "el-input",
                    field: "ycontent",
                    default: "",
                },
                {
                    name: "y轴名称颜色",
                    type: "el-color-picker",
                    field: "ycontentColor",
                    default: "#fff",
                },
                {
                    name: "图表颜色",
                    type: 'barColor',
                    children: [{
                        name: '系列一',
                        key: 'series1',
                        children: [{
                            name: "起始颜色",
                            type: "el-color-picker",
                            field: "barStartColorof1",
                            default: "#0000ff",
                        },
                        {
                            name: "终止颜色",
                            type: "el-color-picker",
                            field: "barEndColorof1",
                            default: "#0000ff",
                        }]
                    },
                    {
                        name: '系列二',
                        key: 'series2',
                        children: [{
                            name: "起始颜色",
                            type: "el-color-picker",
                            field: "barStartColorof2",
                            default: "#0000ff",
                        },
                        {
                            name: "终止颜色",
                            type: "el-color-picker",
                            field: "barEndColorof2",
                            default: "#0000ff",
                        }]
                    }
                    ]

                },

            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "x",
                mapping: "x",
                description: "类目",

            },
            {
                field: "y",
                mapping: "y",
                description: "值",
            },
            {
                field: "s",
                mapping: "s",
                description: "系列",
            },
        ],
        data: [
            {
                "x": "2010/01/01 00:00:00",
                "y": 180,
                "s": "系列一"
            },
            {
                "x": "2010/01/01 00:00:00",
                "y": 320,
                "s": "系列二"
            },
            {
                "x": "2010/01/01 00:00:00",
                "y": 320,
                "s": "系列三"
            },
            {
                "x": "2010/02/01 00:00:00",
                "y": 200,
                "s": "系列一"
            },
            {
                "x": "2010/02/01 00:00:00",
                "y": 120,
                "s": "系列二"
            },
            {
                "x": "2010/03/01 00:00:00",
                "y": 160,
                "s": "系列一"
            },
            {
                "x": "2010/03/01 00:00:00",
                "y": 180,
                "s": "系列二"
            },
            {
                "x": "2010/04/01 00:00:00",
                "y": 200,
                "s": "系列一"
            },
            {
                "x": "2010/04/01 00:00:00",
                "y": 160,
                "s": "系列二"
            },
            {
                "x": "2010/05/01 00:00:00",
                "y": 180,
                "s": "系列一"
            },
            {
                "x": "2010/05/01 00:00:00",
                "y": 220,
                "s": "系列二"
            },
            {
                "x": "2010/06/01 00:00:00",
                "y": 180,
                "s": "系列一"
            },
            {
                "x": "2010/06/01 00:00:00",
                "y": 220,
                "s": "系列二"
            }
        ]

    },
};

export const LineChart2 = {
    attribute: [],
    style: [],
    data: {},
};
