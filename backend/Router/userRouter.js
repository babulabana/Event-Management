const express = require("express")
const router = express.Router();
const userController = require("../Controller/userController")

router.get("/",async(req,res)=>{
    let data = await userController.getAll();
   res.send(data);
})

router.post("/",async(req,res)=>{
    let data = await userController.insertUser(req.body);
    res.send(data);
})

router.post("/login",async(req,res)=>{
    let data = await userController.checkLogin(req.body);
    res.send(data);
})
module.exports = router;