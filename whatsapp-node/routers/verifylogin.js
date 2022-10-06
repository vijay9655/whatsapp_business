const express=require('express')
const Getalluser=require("../models/registeruser")
const router=express.Router()
const axios = require('axios')
var breeds
const getBreeds = async () => {
    console.log("entered axios");
    try {
      return await axios.get('http://localhost:9000/login')
    } catch (error) {
      console.log(error)
    
    }
  }
  
  const countBreeds = async () => {
     breeds = await getBreeds()
  
    if (breeds.data.message) {
      console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
  }
  
  countBreeds()
var user
router.get('/',async(req,res)=>{
   
    try{
        console.log('hiii');
        user=await Getalluser.find()
        console.log(user);
        res.json(user)
    }
    catch(error){
        res.send('error',+error)
        
    }
})

router.post('/',async(req,res)=>{
   
    const adduser=new Getalluser({
        username:req.body.username,
        password:req.body.password
    })
    const check=user.filter((e)=>{
       
               return e.username===adduser.username && e.password===adduser.password
       
    })
    const userstatus={
        status:true,
        id:adduser.id
    }
    const userstatus1={
        status:false,
        
    }
    console.log(check);

    try {
        if(check !=''){          
            res.json(userstatus)
           
        }
        else{
           
           
            res.json(userstatus1)
            countBreeds()
          

        }
    } catch (error) {
        res.send(error)
       
          }
    // console.log("checked",check);
})
module.exports=router