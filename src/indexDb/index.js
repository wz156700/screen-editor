// import IndexDBWrapper from 'indexdbwrapper'

// 数据库版本
let inndexDBVaesion = 1;
// 数据库名称
let indexDBName = "td-views";
// 项目表
let storeNameTag = "project";

let indexDB = window.indexedDB;
let db = null;
// 打开数据库
const request = indexDB.open(indexDBName, inndexDBVaesion);
request.onsuccess = function (event) {
    db = event.target.result;
    console.log("数据库打开成功", db);
};
request.onerror = function () {
    console.log("数据库打开失败");
};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains(storeNameTag)) {
        db.createObjectStore(storeNameTag, {
            keyPath: "uuid",
        });
        // objectStore.createIndex('uuid','uuid',{unique: true}) // 创建索引
    }
};

// 添加数据
export const indexDBAdd = (name, data) => {
    return new Promise((resolve, reject) => {
        let result = db
            .transaction([name], "readwrite") // 事务对象，制定表格名称和操作模式
            .objectStore(name)
            .add(data);
        result.onsuccess = function () {
            resolve();
        };
        result.onerror = function (e) {
            reject();
        };
    });
};

// 查询数据
export const indexDBSearch = (name, key) => {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction([name]); // 事务对象，制定表格名称和操作模式
        let objectStore = transaction.objectStore(name);
        let request = objectStore.get(key);
        request.onsuccess = function (e) {
            resolve(request.result);
        };
        request.onerror = function (e) {
            reject();
        };
    });
};

// 查询数据
export const indexDBSearchAll = (name) => {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction([name]); // 事务对象，制定表格名称和操作模式
        let objectStore = transaction.objectStore(name);
        let request = objectStore.getAll();
        request.onsuccess = function (e) {
            resolve(e.target.result);
        };
        request.onerror = function (e) {
            reject();
        };
    });
};

// 更新数据
export const indexDBUpdata = (name, data) => {
    return new Promise((resolve, reject) => {
        let request = db
            .transaction([name], "readwrite") // 事务对象，制定表格名称和操作模式
            .objectStore(name)
            .put(data);

        request.onsuccess = function () {
            resolve();
        };
        request.onerror = function () {
            reject();
        };
    });
};

// 删除数据
export const indexDBRemove = (name, key) => {
    return new Promise((resolve, reject) => {
        let request = db
            .transaction([name], "readwrite") // 事务对象，制定表格名称和操作模式
            .objectStore(name)
            .delete(key);

        request.onsuccess = function () {
            resolve();
        };
        request.onerror = function () {
            reject();
        };
    });
};
