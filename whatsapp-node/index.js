const express =require("express")
const mongoose=require("mongoose")
const  url  = "mongodb://localhost/whatsapp"
const cors = require('cors')
const app=express();
mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection
app.use(cors())
app.use(express.json())
con.on('open',()=>{
    console.log('db connected');
})
// get all datas from database
const  getalldatas= require('./routers/getalldata')
app.use('/getall', getalldatas)
const addnewdatas=require('./routers/addnewdata')
app.use('/register',addnewdatas)


// verify login user
const verifylogins=require('./routers/verifylogin')
app.use('/login',verifylogins)

const createmessagedata=require('./routers/createmessagedata')
app.use('/textmsg',createmessagedata)
const createimgmessagedata=require('./routers/imagemsg')
app.use('/imagemsg',createimgmessagedata)

app.listen(9000,()=>{
    console.log("server started");
})