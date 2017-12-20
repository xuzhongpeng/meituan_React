var database=new Object();
/**
 * 
 * @param {*} db 数据库实例
 * @param {*} databaseName 数据库名 
 * @param {*} insertData 插入数据
 * @param {*} callback 回调函数获取返回信息
 */
var insertData = function (db,databaseName,insertData, callback) {
    //连接到表 site
    var collection = db.collection(databaseName);
    //插入数据
    var data = insertData;
    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}
/**
 * 
 * @param {*} db 数据库实例
 * @param {*} databaseName 数据库名 
 * @param {*} condition 条件
 * @param {*} callback 回调函数获取返回信息
 */
var selectData = function (db,databaseName, condition, callback) {
    //连接到表  
    var collection = db.collection(databaseName);
    //查询数据
    var whereStr = condition;
    collection.find(whereStr).toArray(function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}
/**
 * 
 * @param {*} db 数据库实例
 * @param {*} databaseName 数据库名 
 * @param {*} condition 条件
 * @param {*} updateData 更新数据
 * @param {*} callback 回调函数获取返回信息
 */
var updateData = function (db,databaseName, condition,updateData, callback) {
    //连接到表  
    var collection = db.collection(databaseName);
    //更新数据
    var whereStr = condition;
    var updateStr = { $set: updateData };
    collection.update(whereStr, updateStr, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}
/**
 * 
 * @param {*} db 数据库实例
 * @param {*} databaseName 数据库名 
 * @param {*} condition 条件
 * @param {*} callback 回调函数获取返回信息
 */
var delData = function (db,databaseName, condition, callback) {
    //连接到表  
    var collection = db.collection(databaseName);
    //删除数据
    var whereStr = condition;
    collection.remove(whereStr, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/meituan_React';/*  # 数据库为 runoob */

database.insertData = function (tableName,insertStr,callback) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        database.insertData(db, tableName, condition, function (result) {
            callback(result);
            db.close();
        });
    })
};
database.selectData = function (tableName, condition, callback) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        selectData(db, tableName, condition, function (result) {
            callback(result);
            db.close();
        });
    })
};
database.updateData = function (tableName, condition, updateData,callback) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        updateData(db, tableName, condition, updateData, function (result) {
            callback(result);
            db.close();
        });
    })
};
database.delData = function (tableName, condition, callback) {
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        delData(db, tableName, condition, function (result) {
            callback(result);
            db.close();
        });
    })
};

module.exports=database;