const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    adminname: String,
    adminemail: String,
    admincontact: String,
    adminpwd: String,
})

var adminModel = mongoose.model("admin",adminSchema)
module.exports = adminModel;