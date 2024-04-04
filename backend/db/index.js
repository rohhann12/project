
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://rohann:rohan@cluster0.xvl6xp0.mongodb.net/")

const UserSchema= new mongoose.Schema({
    Name:String,
    Description:String,
    Interest1:String,
    LinkedIn_Link:String,
    Twitter_Link:String
})

const AdminSchema= new mongoose.Schema({
    username:String,
    password:String,
    jwtToken:String
})

const User= mongoose.model("User",UserSchema)
const Admin= mongoose.model("Admin",AdminSchema)


module.exports={
    User,
    Admin
}