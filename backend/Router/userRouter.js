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

router.put("/updatepassword",async(req,res)=>{
    let d = await userController.updatePwd(req.body);
    res.send(d);
})
router.get("/deleteall",async(req,res)=>{
    let d = await userController.deleteAll();
    res.send(d);
})
module.exports = router;