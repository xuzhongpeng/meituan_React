var database = require("../database");
var getinfo = function (callback) {
    database.selectData("list", {}, function (result) {
        callback(result[0]);
    })
};
module.exports = getinfo;