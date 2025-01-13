const express = require("express")
const app = express()
const db = require("./config/dbconfig")
const userRouter =require("./Router/userRouter")
const adminRouter = require("./Router/adminRouter")
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());
app.use("/admin",adminRouter)
app.use("/user",userRouter)


app.get("/",(req,res)=>{
    res.send(" this is my project")
})

app.listen(8080,()=>console.log("server run"))