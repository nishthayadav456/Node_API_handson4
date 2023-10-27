
const auth=require ("../middleware/auth")
const blogRouter=require("express").Router()
blogRouter.get("/" ,(req,res)=>{
res.send("this is a home page")
})
module.exports=blogRouter