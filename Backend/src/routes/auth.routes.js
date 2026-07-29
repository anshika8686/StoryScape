console.log("Auth routes loaded");
const express=require("express")
const authRouter=express.Router();

const authController=require("../controller/auth.controller");
const identifyUser = require("../middleware/auth.middleware");


console.log("What is inside authController?:", authController);

authRouter.post("/login",authController.loginController);
authRouter.post("/signup",authController.signupController);
authRouter.post("/logout",authController.logoutController);
authRouter.get("/get-me",identifyUser,authController.getmeController)


module.exports=authRouter