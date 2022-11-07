const express=require('express')
const axios = require('axios')
const router=express.Router()
const Usermessage=require('../models/textmessage')
router.post('/',async(req,res)=>{
    const usermessage=new Usermessage({
        mobilenumber:req.body.mobilenumber,
        Textmessage:req.body.Textmessage
    })
    const userstatus={
        status:true,
       id:usermessage.id
    }
    const userstatus1={
        status:false,
        message:'Already exists'
      
    }
    const token='EAAKswWMrccgBALxBgQjf63rXtkYiF9uJfePfAaAwiQZAkIV8ZBaushwdgU1yTwUp05P3yqT7rqQtyR44gB2EmZCplwC7ettduMHIwl0ZAjpfEZAiTHcscP2yIbr6OqGZCgmWKhbpIqcc5pl0WE5qb32KvtQW0fKoKMNZC361yljfetVTv9UhaKM68rjAEWVJKwmROyoIZB0RWDAQZAIyELx2O'
    
    try {
        
        if(usermessage.mobilenumber !=='' && usermessage.Textmessage !==undefined && usermessage.mobilenumber !==undefined){    
            console.log(usermessage.mobilenumber,usermessage.Textmessage); 
            const togglemessage={
                "messaging_product": "whatsapp",
                "preview_url": false,
                "recipient_type": "individual",
                "to": `${usermessage.mobilenumber}`,
                "type": "text",
                "text": {
                    "body": `${usermessage.Textmessage}`
                }
            } 
            const togglemsg1={ "messaging_product": "whatsapp", "to": `${usermessage.mobilenumber}`, "type": "template", "template": { "name": "hello_world", "language": { "code": "en_US" } } }
            axios.post(`https://graph.facebook.com/v14.0/101404072734376/messages`,togglemsg1, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`        
                  }
              })
              .then((response) => {
                console.log('res',response.data,'header',response.status)
                res.json(userstatus)
             usermessage.save()
              })
              .catch((error) => {
                console.log('uyu',error)
                  
              })
            

        }
        else{          
            res.json(userstatus1)

        }
       
       
    } catch (error) {
        res.send(error)

        
    }
})
module.exports=router