const mongoose = require("mongoose");
var connection_String = "mongodb://localhost:27017/project_api";
var connection = mongoose.connect(connection_String)

.then(()=>
    {
        console.log("DataBase connected");
    })
    .catch(()=>
    {
        console.log("Databse Failed to connect");
    })
    
    module.exports = connection;