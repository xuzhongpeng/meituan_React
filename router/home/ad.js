var database = require("../database");
var getinfo = function (callback) {
    database.selectData("ad", {}, function (result) {
        callback(result);
    })
};
module.exports = getinfo;