var database = require("../database");
var getinfo = function (callback) {
    database.selectData("comment", {}, function (result) {
        callback(result[0]);
    })
};
module.exports = getinfo;