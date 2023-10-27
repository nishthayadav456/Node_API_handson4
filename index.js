const express=require('express')
const cors=require('cors')
const userRouter=require('./router/userRouter');
const blogRouter = require('./router/blogRouter');
const auth=require("./middleware/auth")
const app=express();
// const bodyParser=require("body-parser")
// app.use(bodyParser)
app.use(express.json()) //insteed of using body parser
app.use(cors({
    origin:"*"
}))
app.use("/api",userRouter)
app.use("/" ,blogRouter)
// app.use(auth)
app.listen(4005,()=>{
    console.log("server is running on port no. 4005 ")
})