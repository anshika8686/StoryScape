console.log("Auth routes loaded");
const express=require("express")
const authRouter=express.Router();

const authController=require("../controller/auth.controller")

console.log("What is inside authController?:", authController);

authRouter.post("/login",authController.loginController);
authRouter.post("/signup",authController.signupController);
authRouter.post("/logout",authController.logoutController);

module.exports=authRouter