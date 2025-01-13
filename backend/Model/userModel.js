const mongoose = require("mongoose")

var Schema =mongoose.Schema;

var userSchema = new Schema({
    username: String,
    email: String,
    contact: String,
    pwd: String,
    verify:Boolean

})

var userModel = mongoose.model("user",userSchema)
module.exports = userModel;