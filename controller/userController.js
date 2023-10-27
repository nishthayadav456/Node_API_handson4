const array=[] //database
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken") //import the jwt token
const secret_key="nishtha"
//Register Page....

const register=(req,res)=>{
    const data=req.body;
    console.log(data)
    const detail=array.find((item)=>{
        if(item.email===data.email){
            return item
        }
    });
    if (detail){
        return res.send ({msg:"User already registered"})
    }

    //saltround
    // const saltround=bcrypt.genSaltSync(1)
    // console.log(saltround)
    //hashpassword
    const hashpassword=bcrypt.hashSync(data.password,10) //salt round some random string+number+password
    // console.log(hashpassword)
    // res.send(hashpassword)

    const temobj={
        email:data.email,
        password:hashpassword
    }
    array.push(temobj) //data saved in our database
    const token=jwt.sign({useremail:data.email},secret_key,{expiresIn:"360000"}) //for generating the jwt token
    console.log(token)
    res.send({msg:"user registered", token:token})
    
    // array.push(data)
    // console.log(array)
}
//login Page....

const login=(req,res)=>{
    const logindata=req.body;
    // console.log("login details",logindata)
    const detail=array.find((item)=>{
        if(item.email===logindata.email)
        return item
    })
    // console.log(detail)
    if(detail){
        const validate=bcrypt.compareSync(logindata.password,detail.password)//true or false
        if (validate){
            const token=jwt.sign({useremail:logindata.email},secret_key,{expiresIn:"360000"})
            console.log(token)
            return res.send({msg:"user logged in successfully",token:token})
        }
       else{
        return res.send("user password is wrong")
       }
       
    
    
    //         if (detail.password===logindata.password){
    //             return res.send ({message:"user logged IN"})
    //         }
        
    //         else{
    //            return res.send ({message:"password is wrong"})
    //         }
           
        
    // }
    // else{
    //     return res.send ("email is wrong")
    //   }
}
else{
    console.log("email is wrong")
    return res.send({ msg:"user email is wrong"} )
   }
}
module.exports={register,login}