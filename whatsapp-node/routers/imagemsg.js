const express=require('express')
const axios = require('axios')
const router=express.Router()
const Userimgmessage=require('../models/imagemesg')
router.post('/',async(req,res)=>{
    const usermessage=new Userimgmessage({
        mobilenumber:req.body.mobilenumber,
        amount:req.body.amount,
        imageurl:req.body.imageurl,
        percentage:req.body.percentage,
    })
    const userstatus={
        status:true,
       id:usermessage.id
    }
    const userstatus1={
        status:false,
        message:'image msg send failed'
      
    }
    const token='EAAKswWMrccgBALxBgQjf63rXtkYiF9uJfePfAaAwiQZAkIV8ZBaushwdgU1yTwUp05P3yqT7rqQtyR44gB2EmZCplwC7ettduMHIwl0ZAjpfEZAiTHcscP2yIbr6OqGZCgmWKhbpIqcc5pl0WE5qb32KvtQW0fKoKMNZC361yljfetVTv9UhaKM68rjAEWVJKwmROyoIZB0RWDAQZAIyELx2O'
    
    try {
        
        if(usermessage.mobilenumber !=='' && usermessage.amount !==undefined && usermessage.mobilenumber !==undefined){    
            console.log(usermessage.mobilenumber,usermessage.Textmessage); 
            const togglemessage=
            {
                "messaging_product": "whatsapp",
                "to": `${usermessage.mobilenumber}`,
                "type": "template",
                "template": {
                    "name": "template_name",
                    "language": {
                        "code": "en_US",
                        "policy": "deterministic"
                    },
                    "components": [
                        {
                            "type": "header",
                            "parameters": [
                                {
                                    "type": "image",
                                    "image": {
                                        "link":`${usermessage.imageurl}`
                                    }
                                }
                            ]
                        },
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": `${usermessage.amount}`
                                },
                                {
                                    "type": "text",
                                    "text": `${usermessage.percentage}`
                                }
                            ]
                        },
                        {
                          
                            "type": "button",
                            "sub_type": "quick_reply",
                            "index": 0,
                            "parameters": [
                                {
                             
                                    "type": "text",
                                    "text": "confirm"
                                }
                            ]
                        },
                        {
                           
                            "type": "button",
                            "sub_type": "quick_reply",
                            "index": 1,
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": "cancel"
                                }
                            ]
                        }
                    ]
                }
             }
            
            axios.post(`https://graph.facebook.com/v14.0/101404072734376/messages`,togglemessage, {
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
            res.json(userstatus1)

                  
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