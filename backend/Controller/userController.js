const userModel = require("../Model/userModel")

exports.insertUser = async(u)=>{
    var newUser = new userModel({
        username : u.username,
        email: u.email,
        contact: u.contact,
        pwd: u.pwd,
        verify:u.verify
    })

    let i= "failure";
    await newUser.save()
    .then(()=>i="success")
    .catch(()=>i="failure")
    return i;
} 

exports.getAll = async()=>{
    let data = await userModel.find();
    return data;
}

exports.checkLogin = async(u)=>{
    let condition = {email:u.email,pwd:u.pwd};
    let result = false;
    await userModel.find(condition)
    .then((d)=>{
        if(d.length>0){
            result =d
        }
    })
    .catch((e)=>console.log(e))
    return result;

}

exports.deleteAll = async()=>{
    let data = await userModel.deleteMany();
    return data;

}

exports.updatePwd = async(u)=>{
    let condition = {_id:u.id,pwd:u.pwd}
    let newdata = {pwd:u.newpwd}
    let data = await userModel.updateOne(condition,{$set:newdata})
    // console.log(data);
    return JSON.stringify(data.modifiedCount);
}

exports.updateProfile = async(u)=>{
    let condition = {_id:u.id,pwd:u.pwd}
    let newdata = {username : u.username,contact: u.contact,}
    let data = await userModel.updateOne(condition,{$set:newdata})
    // console.log(data);
    return JSON.stringify(data.modifiedCount);
}