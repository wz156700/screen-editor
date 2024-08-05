import { descriptionProps } from "element-plus";
import { keyBy } from "lodash-es";

// 柱状图
export const BarChart1 = {
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
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "起始颜色",
                                    type: "el-color-picker",
                                    field: "barStartColorof1",
                                    default: "rgba(32, 198, 217, 1)",
                                },
                                {
                                    name: "终止颜色",
                                    type: "el-color-picker",
                                    field: "barEndColorof1",
                                    default: "rgba(0, 255, 123, 1)",
                                },
                            ],
                        },
                    ],
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
            { x: "Mon", y: 120, s: "系列一" },
            { x: "Tue", y: 200, s: "系列一" },
            { x: "Wed", y: 150, s: "系列一" },
            { x: "Thu", y: 80, s: "系列一" },
            { x: "Fri", y: 70, s: "系列一" },
            { x: "Sat", y: 110, s: "系列一" },
            { x: "Sun", y: 130, s: "系列一" },
        ],
    },
};

export const BarChart2 = {
    attribute: [{
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
            }, {
                name: "label颜色",
                type: "el-color-picker",
                field: "labelColor",
                default: "#fff",
            },
            {
                name: "图表颜色",
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof1",
                                default: "rgba(155, 230, 140, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof1",
                                default: "rgba(17, 179, 220, 1)",
                            },
                        ],
                    },
                ],
            },
        ],
    },],
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
            { "x": -0.07, "y": "ten", "s": "系列一" },
            { "x": -0.09, "y": "nine", "s": "系列一" },
            { "x": 0.2, "y": "eight", "s": "系列一" },
            { "x": 0.44, "y": "seven", "s": "系列一" },
            { "x": -0.23, "y": "six", "s": "系列一" },
            { "x": 0.08, "y": "five", "s": "系列一" },
            { "x": -0.17, "y": "four", "s": "系列一" },
            { "x": 0.47, "y": "three", "s": "系列一" },
            { "x": -0.36, "y": "two", "s": "系列一" },
            { "x": 0.18, "y": "one", "s": "系列一" }
        ],
    }
};

export const BarChart3 = {
    attribute: [{
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
                name: "图例颜色",
                type: "el-color-picker",
                field: "lengendColor",
                default: "#fff",
            },
            {
                name: "图表颜色",
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof1",
                                default: "rgba(4, 255, 0, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof1",
                                default: "rgba(14, 208, 202, 1)",
                            },
                        ],
                    },
                    {
                        name: "系列二",
                        key: "series2",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof2",
                                default: "rgba(187, 224, 2, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof2",
                                default: "rgba(245, 202, 12, 1)",
                            },
                        ],
                    },
                ],
            },
        ],
    },],
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
            { "x": 18203, "y": "Brazil", "s": "系列一" },
            { "x": 23489, "y": "Indonesia", "s": "系列一" },
            { "x": 29034, "y": "USA", "s": "系列一" },
            { "x": 104970, "y": "India", "s": "系列一" },
            { "x": 131744, "y": "China", "s": "系列一" },
            { "x": 630230, "y": "World", "s": "系列一" },
            { "x": 19325, "y": "Brazil", "s": "系列二" },
            { "x": 23438, "y": "Indonesia", "s": "系列二" },
            { "x": 31000, "y": "USA", "s": "系列二" },
            { "x": 121594, "y": "India", "s": "系列二" },
            { "x": 134141, "y": "China", "s": "系列二" },
            { "x": 681807, "y": "World", "s": "系列二" },
        ],
    }
};

export const BarChart4 = {
    attribute: [{
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
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
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
                            },
                        ],
                    },
                    {
                        name: "系列二",
                        key: "series2",
                        children: [
                            {
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
                            },
                        ],
                    },
                ],
            },
        ],
    },],
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
                "y": 18203,
                "x": "Brazil",
                "s": "系列一"
            },
            {
                "y": 23489,
                "x": "Indonesia",
                "s": "系列一"
            },
            {
                "y": 29034,
                "x": "USA",
                "s": "系列一"
            },
            {
                "y": 104970,
                "x": "India",
                "s": "系列一"
            },
            {
                "y": 131744,
                "x": "China",
                "s": "系列一"
            },
            {
                "y": 630230,
                "x": "World",
                "s": "系列一"
            },
            {
                "y": 19325,
                "x": "Brazil",
                "s": "系列二"
            },
            {
                "y": 23438,
                "x": "Indonesia",
                "s": "系列二"
            },
            {
                "y": 31000,
                "x": "USA",
                "s": "系列二"
            },
            {
                "y": 121594,
                "x": "India",
                "s": "系列二"
            },
            {
                "y": 134141,
                "x": "China",
                "s": "系列二"
            },
            {
                "y": 681807,
                "x": "World",
                "s": "系列二"
            }
        ],
    }
};

export const polarBar = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [
                {
                    name: "坐标轴文本颜色",
                    type: "el-color-picker",
                    field: "xColor",
                    default: "#fff",
                },
                {
                    name: "坐标轴文字大小",
                    type: "el-input-number",
                    field: "xfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "文本颜色",
                    type: "el-color-picker",
                    field: "contentColor",
                    default: "#fff",
                },
                {
                    name: "图表颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "起始颜色",
                                    type: "el-color-picker",
                                    field: "barStartColorof1",
                                    default: "rgba(42, 255, 0, 1)",
                                },
                                {
                                    name: "终止颜色",
                                    type: "el-color-picker",
                                    field: "barEndColorof1",
                                    default: "rgba(0, 255, 229, 1)",
                                },
                            ],
                        },
                    ],
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
            { x: "a", y: 2, s: "系列一" },
            { x: "b", y: 1.2, s: "系列一" },
            { x: "c", y: 2.4, s: "系列一" },
            { x: "d", y: 3.6, s: "系列一" },
        ],
    },
};

export const polarBar2 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [
                {
                    name: "坐标轴文本颜色",
                    type: "el-color-picker",
                    field: "xColor",
                    default: "#fff",
                },
                {
                    name: "坐标轴文字大小",
                    type: "el-input-number",
                    field: "xfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "文本颜色",
                    type: "el-color-picker",
                    field: "contentColor",
                    default: "#fff",
                },
                {
                    name: "图表颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "起始颜色",
                                    type: "el-color-picker",
                                    field: "barStartColorof1",
                                    default: "rgba(42, 255, 0, 1)",
                                },
                                {
                                    name: "终止颜色",
                                    type: "el-color-picker",
                                    field: "barEndColorof1",
                                    default: "rgba(0, 255, 229, 1)",
                                },
                            ],
                        },
                    ],
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
            { x: "a", y: 2, s: "系列一" },
            { x: "b", y: 1.2, s: "系列一" },
            { x: "c", y: 2.4, s: "系列一" },
            { x: "d", y: 3.6, s: "系列一" },
        ],
    },
};

//折线图
export const lineChart1 = {
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
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
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
                                },
                            ],
                        },
                    ],
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
            { x: "Mon", y: 120, s: "系列一" },
            { x: "Tue", y: 200, s: "系列一" },
            { x: "Wed", y: 150, s: "系列一" },
            { x: "Thu", y: 80, s: "系列一" },
            { x: "Fri", y: 70, s: "系列一" },
            { x: "Sat", y: 110, s: "系列一" },
            { x: "Sun", y: 130, s: "系列一" },
        ],
    },
};

export const lineChart2 = {
    attribute: [{
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
                name: "图例颜色",
                type: "el-color-picker",
                field: "legendColor",
                default: "#fff",
            },
            {
                name: "图表颜色",
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof1",
                                default: "rgba(94, 255, 0, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof1",
                                default: "rgba(0, 255, 221, 1)",
                            },
                        ],
                    },
                    {
                        name: "系列二",
                        key: "series2",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof2",
                                default: "rgba(204, 255, 0, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof2",
                                default: "rgba(255, 191, 0, 1)",
                            },
                        ],
                    },
                ],
            },
        ],
    },],
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
                "y": 18203,
                "x": "Brazil",
                "s": "系列一"
            },
            {
                "y": 23489,
                "x": "Indonesia",
                "s": "系列一"
            },
            {
                "y": 29034,
                "x": "USA",
                "s": "系列一"
            },
            {
                "y": 104970,
                "x": "India",
                "s": "系列一"
            },
            {
                "y": 131744,
                "x": "China",
                "s": "系列一"
            },
            {
                "y": 630230,
                "x": "World",
                "s": "系列一"
            },
            {
                "y": 19325,
                "x": "Brazil",
                "s": "系列二"
            },
            {
                "y": 23438,
                "x": "Indonesia",
                "s": "系列二"
            },
            {
                "y": 31000,
                "x": "USA",
                "s": "系列二"
            },
            {
                "y": 121594,
                "x": "India",
                "s": "系列二"
            },
            {
                "y": 134141,
                "x": "China",
                "s": "系列二"
            },
            {
                "y": 681807,
                "x": "World",
                "s": "系列二"
            }
        ],
    }
};

export const lineChart3 = {
    attribute: [{
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
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof1",
                                default: "rgba(139, 228, 6, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof1",
                                default: "rgba(0, 255, 238, 1)",
                            },
                        ],
                    },
                    {
                        name: "系列二",
                        key: "series2",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof2",
                                default: "rgba(255, 225, 0, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof2",
                                default: "rgba(255, 115, 0, 1)",
                            },
                        ],
                    },
                ],
            },
        ],
    },],
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
                "y": 18203,
                "x": "Brazil",
                "s": "系列一"
            },
            {
                "y": 23489,
                "x": "Indonesia",
                "s": "系列一"
            },
            {
                "y": 29034,
                "x": "USA",
                "s": "系列一"
            },
            {
                "y": 104970,
                "x": "India",
                "s": "系列一"
            },
            {
                "y": 131744,
                "x": "China",
                "s": "系列一"
            },
            {
                "y": 630230,
                "x": "World",
                "s": "系列一"
            },
            {
                "y": 19325,
                "x": "Brazil",
                "s": "系列二"
            },
            {
                "y": 23438,
                "x": "Indonesia",
                "s": "系列二"
            },
            {
                "y": 31000,
                "x": "USA",
                "s": "系列二"
            },
            {
                "y": 121594,
                "x": "India",
                "s": "系列二"
            },
            {
                "y": 134141,
                "x": "China",
                "s": "系列二"
            },
            {
                "y": 681807,
                "x": "World",
                "s": "系列二"
            }
        ],
    }
};

export const lineChart4 = {
    attribute: [{
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
                type: "barColor",
                children: [
                    {
                        name: "系列一",
                        key: "series1",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof1",
                                default: "rgba(94, 255, 0, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof1",
                                default: "rgba(0, 255, 204, 1)",
                            },
                        ],
                    },
                    {
                        name: "系列二",
                        key: "series2",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof2",
                                default: "rgba(0, 81, 255, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof2",
                                default: "rgba(187, 0, 255, 1)",
                            },
                        ],
                    },
                    {
                        name: "系列三",
                        key: "series3",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof3",
                                default: "rgba(255, 217, 0, 1)",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof3",
                                default: "rgba(255, 60, 0, 1)",
                            },
                        ],
                    },
                ],
            },
        ],
    },],
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
            { "x": "2020-11-03", "y": 12, "s": "供温" },
            { "x": "2020-11-03", "y": 22, "s": "回温" },
            { "x": "2020-11-03", "y": 45, "s": "均温" },
            { "x": "2020-11-04", "y": 13, "s": "供温" },
            { "x": "2020-11-04", "y": 28, "s": "回温" },
            { "x": "2020-11-04", "y": 43, "s": "均温" },
            { "x": "2020-11-05", "y": 10, "s": "供温" },
            { "x": "2020-11-05", "y": 20, "s": "回温" },
            { "x": "2020-11-05", "y": 40, "s": "均温" },
            { "x": "2020-11-06", "y": 13, "s": "供温" },
            { "x": "2020-11-06", "y": 23, "s": "回温" },
            { "x": "2020-11-06", "y": 44, "s": "均温" },
            { "x": "2020-11-07", "y": 10, "s": "供温" },
            { "x": "2020-11-07", "y": 29, "s": "回温" },
            { "x": "2020-11-07", "y": 59, "s": "均温" },
            { "x": "2020-11-08", "y": 23, "s": "供温" },
            { "x": "2020-11-08", "y": 43, "s": "回温" },
            { "x": "2020-11-08", "y": 53, "s": "均温" },
            { "x": "2020-11-09", "y": 21, "s": "供温" },
            { "x": "2020-11-09", "y": 41, "s": "回温" },
            { "x": "2020-11-09", "y": 51, "s": "均温" }
        ],
    }
};

//饼图

export const pieChart1 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [

                {
                    name: "label文字大小",
                    type: "el-input-number",
                    field: "labelfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "是否显示label",
                    type: "el-switch",
                    field: "isShowLabel",
                    default: true
                },
                {
                    name: "图例颜色",
                    type: "el-color-picker",
                    field: "lengendColor",
                    default: "#c23531",
                },
                {
                    name: "图表颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "part1颜色",
                                    type: "el-color-picker",
                                    field: "partColorof1",
                                    default: "#c23531",
                                },
                                {
                                    name: "part2颜色",
                                    type: "el-color-picker",
                                    field: "partColorof2",
                                    default: "#2f4554",
                                },
                                {
                                    name: "part3颜色",
                                    type: "el-color-picker",
                                    field: "partColorof3",
                                    default: "#61a0a8",
                                },
                                {
                                    name: "part4颜色",
                                    type: "el-color-picker",
                                    field: "partColorof4",
                                    default: "#d48265",
                                },
                                {
                                    name: "part5颜色",
                                    type: "el-color-picker",
                                    field: "partColorof5",
                                    default: "#91c7ae",
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "value",
                mapping: "value",
                description: "值",
            },
            {
                field: "name",
                mapping: "name",
                description: "系列",
            },
        ],
        data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
        ],
    },
}

export const pieChart2 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [

                {
                    name: "label文字大小",
                    type: "el-input-number",
                    field: "labelfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "图例颜色",
                    type: "el-color-picker",
                    field: "lengendColor",
                    default: "#c23531",
                },
                {
                    name: "图表颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "part1颜色",
                                    type: "el-color-picker",
                                    field: "partColorof1",
                                    default: "#c23531",
                                },
                                {
                                    name: "part2颜色",
                                    type: "el-color-picker",
                                    field: "partColorof2",
                                    default: "#2f4554",
                                },
                                {
                                    name: "part3颜色",
                                    type: "el-color-picker",
                                    field: "partColorof3",
                                    default: "#61a0a8",
                                },
                                {
                                    name: "part4颜色",
                                    type: "el-color-picker",
                                    field: "partColorof4",
                                    default: "#d48265",
                                },
                                {
                                    name: "part5颜色",
                                    type: "el-color-picker",
                                    field: "partColorof5",
                                    default: "#91c7ae",
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "value",
                mapping: "value",
                description: "值",
            },
            {
                field: "name",
                mapping: "name",
                description: "系列",
            },
        ],
        data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
        ],
    },
}

export const pieChart3 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [

                {
                    name: "label文字大小",
                    type: "el-input-number",
                    field: "labelfontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "是否显示label",
                    type: "el-switch",
                    field: "isShowLabel",
                    default: true
                },
                {
                    name: "图例颜色",
                    type: "el-color-picker",
                    field: "lengendColor",
                    default: "#c23531",
                },
                {
                    name: "图表颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "part1颜色",
                                    type: "el-color-picker",
                                    field: "partColorof1",
                                    default: "#c23531",
                                },
                                {
                                    name: "part2颜色",
                                    type: "el-color-picker",
                                    field: "partColorof2",
                                    default: "#2f4554",
                                },
                                {
                                    name: "part3颜色",
                                    type: "el-color-picker",
                                    field: "partColorof3",
                                    default: "#61a0a8",
                                },
                                {
                                    name: "part4颜色",
                                    type: "el-color-picker",
                                    field: "partColorof4",
                                    default: "#d48265",
                                },
                                {
                                    name: "part5颜色",
                                    type: "el-color-picker",
                                    field: "partColorof5",
                                    default: "#91c7ae",
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "value",
                mapping: "value",
                description: "值",
            },
            {
                field: "name",
                mapping: "name",
                description: "系列",
            },
        ],
        data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
        ],
    },
}

//散点图
export const scatterPlot1 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [
                {
                    name: "散点颜色",
                    type: "el-color-picker",
                    field: "scatterPlotColor",
                    default: "#c23531",
                },
                {
                    name: "散点大小",
                    type: "el-input-number",
                    field: "scatterPlotSize",
                    default: 20,

                },
            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "value",
                mapping: "value",
                description: "值",
            },
            {
                field: "name",
                mapping: "name",
                description: "系列",
            },
        ],
        data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
        ],
    },
}

export const scatterPlot2 = {
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


            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "value",
                mapping: "value",
                description: "值",
            },
            {
                field: "name",
                mapping: "name",
                description: "系列",
            },
        ],
        data: [
            [
                [28604, 77, 17096869, 'Australia', 1990],
                [31163, 77.4, 27662440, 'Canada', 1990],
                [1516, 68, 1154605773, 'China', 1990],
                [13670, 74.7, 10582082, 'Cuba', 1990],
                [28599, 75, 4986705, 'Finland', 1990],
                [29476, 77.1, 56943299, 'France', 1990],
                [31476, 75.4, 78958237, 'Germany', 1990],
                [28666, 78.1, 254830, 'Iceland', 1990],
                [1777, 57.7, 870601776, 'India', 1990],
                [29550, 79.1, 122249285, 'Japan', 1990],
                [2076, 67.9, 20194354, 'North Korea', 1990],
                [12087, 72, 42972254, 'South Korea', 1990],
                [24021, 75.4, 3397534, 'New Zealand', 1990],
                [43296, 76.8, 4240375, 'Norway', 1990],
                [10088, 70.8, 38195258, 'Poland', 1990],
                [19349, 69.6, 147568552, 'Russia', 1990],
                [10670, 67.3, 53994605, 'Turkey', 1990],
                [26424, 75.7, 57110117, 'United Kingdom', 1990],
                [37062, 75.4, 252847810, 'United States', 1990]
            ],
            [
                [44056, 81.8, 23968973, 'Australia', 2015],
                [43294, 81.7, 35939927, 'Canada', 2015],
                [13334, 76.9, 1376048943, 'China', 2015],
                [21291, 78.5, 11389562, 'Cuba', 2015],
                [38923, 80.8, 5503457, 'Finland', 2015],
                [37599, 81.9, 64395345, 'France', 2015],
                [44053, 81.1, 80688545, 'Germany', 2015],
                [42182, 82.8, 329425, 'Iceland', 2015],
                [5903, 66.8, 1311050527, 'India', 2015],
                [36162, 83.5, 126573481, 'Japan', 2015],
                [1390, 71.4, 25155317, 'North Korea', 2015],
                [34644, 80.7, 50293439, 'South Korea', 2015],
                [34186, 80.6, 4528526, 'New Zealand', 2015],
                [64304, 81.6, 5210967, 'Norway', 2015],
                [24787, 77.3, 38611794, 'Poland', 2015],
                [23038, 73.13, 143456918, 'Russia', 2015],
                [19360, 76.5, 78665830, 'Turkey', 2015],
                [38225, 81.4, 64715810, 'United Kingdom', 2015],
                [53354, 79.1, 321773631, 'United States', 2015]
            ]
        ],
    },
}


//地图
export const Map1 = {
    attribute: [
        {
            name: "属性配置",
            value: "A",
            children: [
                {
                    name: "地图文字颜色",
                    type: "el-color-picker",
                    field: "mapLabelColor",
                    default: "#fff",
                },
                {
                    name: "地图文字大小",
                    type: "el-input-number",
                    field: "mapLabelFontSize",
                    default: 12,
                    max: 12,
                    max: 100,
                },
                {
                    name: "地图高亮颜色",
                    type: "el-color-picker",
                    field: "emphasisColor",
                    default: "#fff",
                },

                {
                    name: "地图板块边缘颜色",
                    type: "el-color-picker",
                    field: "plateEdgeColor",
                    default: "#fff",
                },
                {
                    name: "图例颜色",
                    type: "barColor",
                    children: [
                        {
                            name: "系列一",
                            key: "series1",
                            children: [
                                {
                                    name: "低位颜色",
                                    type: "el-color-picker",
                                    field: "lowColorof1",
                                    default: "rgba(4, 255, 0, 1)",
                                },
                                {
                                    name: "中位颜色",
                                    type: "el-color-picker",
                                    field: "MiddleColorof1",
                                    default: "rgba(14, 208, 202, 1)",
                                }, {
                                    name: "高位颜色",
                                    type: "el-color-picker",
                                    field: "highColorof1",
                                    default: "rgba(14, 208, 202, 1)",
                                },
                            ],
                        },
                    ],
                },

            ],
        },
    ],
    style: [],
    data: {
        fieldDescription: [
            {
                field: "value",
                mapping: "value",
                description: "值",
            },
            {
                field: "name",
                mapping: "name",
                description: "系列",
            },
        ],
        data: [
            { name: "沈阳市", value: 11 },
            { name: "大连市", value: 14 },
            { name: "鞍山市", value: 31 },
            { name: "抚顺市", value: 6 },
            { name: "本溪市", value: 0 },
            { name: "丹东市", value: 0 },
            { name: "锦州市", value: 3 },
            { name: "营口市", value: 4 },
            { name: "阜新市", value: 5 },
            { name: "辽阳市", value: 21 },
            { name: "盘锦市", value: 4 },
            { name: "铁岭市", value: 5 },
            { name: "朝阳市", value: 0 },
            { name: "葫芦岛市", value: 0 },
        ],
    },
}
