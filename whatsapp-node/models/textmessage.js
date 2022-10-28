const mongoose=require('mongoose')
const textmessage=new mongoose.Schema({
    mobilenumber:{
        type:Number,
        require:true
    },
    Textmessage:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Usermessage',textmessage)