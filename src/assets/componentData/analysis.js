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
                    {
                        name: "系列三",
                        key: "series3",
                        children: [
                            {
                                name: "起始颜色",
                                type: "el-color-picker",
                                field: "barStartColorof3",
                                default: "#0000ff",
                            },
                            {
                                name: "终止颜色",
                                type: "el-color-picker",
                                field: "barEndColorof3",
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
            { y: 1048, s: 'Search Engine' },
            { y: 735, s: 'Direct' },
            { y: 580, s: 'Email' },
            { y: 484, s: 'Union Ads' },
            { y: 300, s: 'Video Ads' },
        ],
    },
}