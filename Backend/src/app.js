const path = require("path");
const express=require('express')
const cors = require('cors');
const cookieParser=require('cookie-parser')

const app=express()

//MIDDLEWARE
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true, 
}));
app.use(cookieParser())
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

//ROUTING
const authRouter=require('./routes/auth.routes');
const storyRouter = require('./routes/story.route');

//before any link use api/auth
app.use("/api/auth",authRouter)
app.use("/api/story",storyRouter)
module.exports=app