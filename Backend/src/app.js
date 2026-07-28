const express=require('express')
const cors = require('cors');
const cookieParser=require('cookie-parser')

const app=express()

//MIDDLEWARE
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 

}));
app.use(cookieParser())

//ROUTING
const authRouter=require('./routes/auth.routes');
const storyRouter = require('./routes/story.route');

//before any link use api/auth
app.use("/api/auth",authRouter)
app.use("/api/story",storyRouter)
module.exports=app