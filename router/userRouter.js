const { register,login } = require("../controller/userController")

const userRouter=require("express").Router()
userRouter.post("/register",register)
userRouter.post("/login",login)

module.exports=userRouter