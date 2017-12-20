var database = require("../database");
var getinfo = function (callback) {
    database.selectData("orderList", {}, function (result) {
        callback(result);
    })
};
module.exports = getinfo;