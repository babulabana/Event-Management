const express = require("express")
const router = express.Router();
const adminController = require("../Controller/adminController")
router.get("/",async(req,res)=>{
    let data = await adminController.getAll();
    res.send(data);
})

router.post("/",async(req,res)=>{
    let data = await adminController.insertAdmin(req.body);
    res.send(data);

})
router.post("/login",async(req,res)=>{
    let data = await adminController.adminLogin(req.body);
    res.send(data);
})
module.exports= router;