var express = require("express");
var app = express();
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}));



var user = require("./routes/user.js");
var comman = require("./routes/comman.js");
var admin = require("./routes/admin.js")





app.use(express.static("public"));
app.use("/",comman);
app.use("/user",user);
app.use("/admin",admin);



app.listen(1000);

