const express=require('express')
const Getalluser=require('../models/registeruser')
const axios = require('axios')
const router=express.Router()
var user
var breeds
const getBreeds = async () => {
    console.log("entered axios");
    try {
      return await axios.get('http://localhost:9000/login')
    } catch (error) {
      console.error(error)
    }
  }
  
  const countBreeds = async () => {
     breeds = await getBreeds()
  
    if (breeds.data.message) {
      console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
     
    }
  }
  
  countBreeds()

router.post('/',async(req,res)=>{
    // console.log('add new user',breeds);
    const adduser=new Getalluser({
        username:req.body.username,
        email:req.body.email,
        mobilenumber:req.body.mobilenumber,
        password:req.body.password

    })
    const userstatus={
        status:true,
        id:adduser.id
    }
    const userstatus1={
        status:false,
        message:'Already exists'
      
    }
    var check=breeds.data.filter(function (e){
            
           return e.email===adduser.email
       
    })
console.log('check',check);
   
    try {
        
        if(check !=''){          
            res.json(userstatus1)

        }
        else{
            adduser.save()
            console.log('checked',check);
            res.json(userstatus)
            countBreeds()

        }
       
       
    } catch (error) {
        res.send(error)

        
    }
})
module.exports=router