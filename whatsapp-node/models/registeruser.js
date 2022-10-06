const mongoose=require('mongoose')
const registeruser=new mongoose.Schema({
    username: {type: String, 
        // lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true
        require:true 

    },
    email:{type:String,
        // lowercase:true,require:[true,"can't be blank"],match:[/\S+@\S+\.\S+/, 'is invalid'],index:true
        require:true
    },
    created:{
        type:Date,
        default:new Date()
    },
    mobilenumber:{
        type:Number,
        required: true,
    },
    password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Getalluser',registeruser)