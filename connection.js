var mysql = require("mysql2");
var util = require("util");

var conn=mysql.createConnection({
    host : "b75nkye1dn2gbfqzndnj-mysql.services.clever-cloud.com",
    user : "uoe9sreerws1diej",
    password : "YqbQpr0FR5kWtwA5YydL",
    database : "b75nkye1dn2gbfqzndnj"
})

var exe = util.promisify(conn.query).bind(conn)

module.exports = exe;
