function identifyUser(req,res,next){
    const token=req.cookies.token
    console.log("Printing token");
    console.log(token);
    if(!token){
        res.status(401).json({
            message:"Unauthorised access"
        })
    }

    //VERIFYNG WHETHER THE USER WHO REQUESTED FOT THAT SERVICE IS AUTHORISED OR NOT
    let decoded=null;
    try{
     decoded=jwt.verify(token,process.env.JWT_SECRET)
    }
    catch(err){
     return res.status(401).json({
         message: "User not authorised",
    });
  }

  req.user=decoded // IF YES THEN SAVE USER ID
  next()// pass the request from the above middleware to the next controller
}
module.exports=identifyValidUser