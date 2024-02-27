// 每个组件的数据
import { stylePublic } from "./public";

import { elButton } from "./butten";
import { LineChart1, LineChart2 } from "./analysis";
import { Map1 } from './map'
import {
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    BorderBox6,
    BorderBox7,
    BorderBox8,
    BorderBox9,
    BorderBox10,
    BorderBox11,
    BorderBox12,
    BorderBox13,
    Decoration1,
    Decoration3,
    Decoration5,
    Decoration6,
    Decoration7,
    Decoration8,
    Decoration11,
    Decoration12,
    apWviewText1,
} from "./components";

let data = {
    Map1,
    elButton,
    LineChart1,
    LineChart2,
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    BorderBox6,
    BorderBox7,
    BorderBox8,
    BorderBox9,
    BorderBox10,
    BorderBox11,
    BorderBox12,
    BorderBox13,
    Decoration1,
    Decoration3,
    Decoration5,
    Decoration6,
    Decoration7,
    Decoration8,
    Decoration11,
    Decoration12,
    apWviewText1
};

export const getConfig = (name) => {
    let itemData = {};
    itemData = {
        ...JSON.parse(JSON.stringify(data[name])),
    };
    itemData.style.unshift(...stylePublic);
    return {
        ...itemData,
    };
};

export const getConfigData = (name, value) => {
    let item = {
        attribute: {},
        style: {},
        data: {},
    };

    let itemData = {
        ...data[name],
    };
    let Public = {};
    for (let i = 0; i < stylePublic.length; i++) {
        for (let k = 0; k < stylePublic[i].children.length; k++) {
            Public[stylePublic[i].children[k].field] = value[stylePublic[i].children[k].field] || stylePublic[i].children[k].default;
        }
    }
    item.style = { ...Public };
    for (let i = 0; i < itemData.attribute.length; i++) {
        for (let k = 0; k < itemData.attribute[i].children.length; k++) {
            item.attribute[itemData.attribute[i].children[k].field] = value.attribute[itemData.attribute[i].children[k].field] || itemData.attribute[i].children[k].default;
        }
    }
    for (let i = 0; i < itemData.style.length; i++) {
        for (let k = 0; k < itemData.style[i].children.length; k++) {
            item.style[itemData.style[i].children[k].field] = value.style[itemData.style[i].children[k].field] || itemData.style[i].children[k].default;
        }
    }

    return item;
};
