const adminModel = require("../Model/adminModel")

exports.insertAdmin = async(a)=>{
    var newAdmin = new adminModel({
        adminname :a.adminname,
        adminemail: a.adminemail,
        admincontact: a.admincontact,
        adminpwd: a.adminpwd
    })
    let i= "failure";
    await newAdmin.save()
    .then(()=>i="success")
    .catch(()=>i="failure")
    return i;
}

exports.getAll = async()=>{
    let data = await adminModel.find();
    return data;
}

exports.adminLogin = async(a)=>{
    let condition = {adminemail:a.adminemail,adminpwd:a.adminpwd}
    let result = false;
    await adminModel.find(condition)
    .then((d)=>{
        if(d.length>0){
            result= d;
        }
    })
    .catch((e)=>console.log(e))
    return result;

}