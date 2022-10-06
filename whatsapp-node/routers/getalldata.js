const express=require('express')
const Getalluser=require("../models/registeruser")
const router=express.Router()
var user
router.get('/',async(req,res)=>{
   
    try{
        console.log('hiii');
        user=await Getalluser.find()
        // console.log(user);
        res.json(user)
        
    }
    catch(error){
        res.send('error',+error)
        
        
    }
})
module.exports=router