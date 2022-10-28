const mongoose=require('mongoose')
const imagemsg=new mongoose.Schema({
    mobilenumber:{
        type:Number,
        require:true
    },
    imageurl:{
        type:String,
        require:true
    },
    percentage:{
        type:String,
        require:true
    },
    amount:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Userimgmessage',imagemsg)