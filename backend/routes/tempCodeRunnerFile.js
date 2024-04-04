const {Admin,User}=require("../db/index.js")
const { Router } = require("express");
const jwt=require('jsonwebtoken')
const adminMiddleware = require("../middlewares/admin.js");
const router = Router();
const express = require("express");
const app = express(); 
app.use(router); 

router.post('/addAdmin',(req,res)=>{
    let username=req.headers.username
    let password=req.headers.password
    let jwtToken=jwt.sign({
        password,
        username
    },'secret')

    Admin.create({
        username,
        password,
        jwtToken
    })
    .then(function(){
        res.json({
            msg:"admin created successfully"
          })
})
})
router.post("/addUser",async(req,res)=>{
    // creating a user 
    console.log("hi there")
    const Name = req.body.Name;
    const Description = req.body.Description;
    const Interest1 = req.body.Interest1;
    const LinkedIn_Link = req.body.LinkedIn_Link;
    const Twitter_Link = req.body.Twitter_Link;

try{
    
    await User.create({
        Name,
        Description,
        Interest1,
        LinkedIn_Link,
        Twitter_Link
    })
    res.json({
        msg:"user created successfully"
    })
}
catch(err){
    console.log(err)
}
})
router.put("/updateUserDetail", async(req,res)=>{
    let Name = req.body.Name;
    let Description = req.body.Description;
    let Interest1 = req.body.Interest1;
    let LinkedIn_Link = req.body.LinkedIn_Link;
    let Twitter_Link = req.body.Twitter_Link;

    try {
    await User.findOneandUpdate(
    { Name },
    { $set: { Description, Interest1, LinkedIn_Link, Twitter_Link } }
    );
    res.json({ msg: "updated successfully" });
    }
     catch (err) {
    console.log(err); 
    res.status(500).json({ error: "Failed to update user details" });
    }

})

router.delete("/deleteUser",async(req,res)=>{
// we wil be deleting the users based on their employee code-- jo badi si string bankr ati h mongo mei---BAAD MEI ABHI UNIQUE NAME HAI USPR SORT KRLO
    try{
    let Name=req.body.Name
    await User.deleteOne({
        Name
    })
    }
    catch(err){
        console.log(err);
    }
})

router.get("/getAllUsers",async(res,req)=>{
    try{
        const responses=await User.find({})
    res.json({
        msg:responses
    })
    }
    catch(err){
        console.log(err)
    }
})

app.listen(3000)