const {Admin} =require('../db/index')


function admin(res,req,next){
    let jwtToken=req.headers.jwtToken
    Admin.findOne({
        jwtToken
    })
    .then(function(val){
        if(val){
            next();
            res.json({
                msg:"logged in successfully"
            })
        }else{
            res.json({
                msg:"invalid user"
            })
        }
    })
}

