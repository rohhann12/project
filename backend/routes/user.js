const {User}=require("../db/index.js")
const { Router } = require("express");
const router = Router();
const express = require("express");
const app = express(); 
app.use(router); 

router.post('/addUserByUser',(req,res)=>{
  let Name=req.body.Name
    let Description=req.body.Description
    let Interest1=req.body.Interest1
    let LinkedIn_Link=req.body.LinkedIn_Link
    let Twitter_Link=req.body.Twitter_Link

    User.create({
        Name,
        Description,
        Interest1,
        LinkedIn_Link,
        Twitter_Link
    }).then(function(val){
    res.json({
        msg:"User created successfully"
    })
    })
})


app.listen(3000)