import React,{useState} from 'react'
import '../Mainpage/mainpage.css'
import { Col, Card , Row,Input,Form, Button,Spin} from 'antd';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import  { SendOutlined } from '@ant-design/icons';
import Spinloading from '../../SpinLoading';
function whatsapptemplate({value}) {
    const [data, setData] = useState(null);
    const [blur, setBlur] = useState(false);

    const { TextArea } = Input;
    const { handleSubmit, reset, control } = useForm();
    const onLogin=(values)=>{
        console.log('starting',values);
        if(values.type==='click'){
         console.log('');
        }
        
        else if(values.type !=='click'){
            axios.post('http://localhost:9000/textmsg',values).then((res)=>{
                console.log(res.data);
                alert(res.data)
                })
           
        }
     
        // else{
        //   console.log('hii',values.type);
         
        // }
        // console.log('values',values);
        setData(values)

    }

    if(value===true){
        setInterval(function(){
            setBlur(true)
        },1000)    

    }
   
    // const onFinishFailed=(erroe)=>{

    // }
  return (
    <div>
    {blur===true?
    <div className='whatsapptemp'>
      
      <h1 style={{color:"green",paddingTop:'3%',textAlign:'left',paddingLeft:'2%',fontWeight:900}}>  Text Message To A Number </h1>
      <hr style={{height:'2px',backgroundColor:'green'}}/>
        <div
        >
            <div className='whatsapp-body'>
            <Row justify="start">
      <Col style={{height:'500px'}} xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} >
        <div>
        <Card
    style={{
      width: '80%',margin:'10%',alignItems:'center',justifyContent:'center',
    }}
  >
    <form onSubmit={handleSubmit(onLogin)}>
<Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
    <Controller

control={control}

name='mobilenumber'
render={({field})=>(
    <div>
        <h3 style={{fontWeight:900,color:'green'}}>To-Mobile-number</h3>
    <PhoneInput  country={'in'} {...field}/>
        </div>
)}
/>
    </Col>
</Row>
<Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        
<h3 style={{fontWeight:900,color:'green'}}>Text Message</h3>
<Controller

control={control}

name='Textmessage'
render={({field})=>(
    <div>
       
    <TextArea  placeholder='enter the text message send ' style={{width:'84%',marginLeft:'8%',borderRadius:'5px'}} {...field}/>
        </div>
)}
/>

    </Col>
</Row>
<Row style={{width:'80%',margin:'auto',justifyContent:'space-evenly',paddingTop:'7%',alignItems:'center'}}>
        <Col>
    <button style={{color:'white',backgroundColor:"orange",border:'none',fontWeight:'900',borderRadius:'10%',cursor:'pointer',padding:'10%'}}   onClick={onLogin}>
Preview
</button>
    </Col>
    <Col>
    <button style={{color:'white',backgroundColor:"darkblue",border:'none',fontWeight:'900',borderRadius:'10%',cursor:'pointer',padding:'14% 40% 14% 40%'}} type='htmlType'>
Send
</button>
</Col>
    <Col>
    <Button  style={{color:'white',backgroundColor:"darkblue",border:'none',fontWeight:'900',borderRadius:'10%',cursor:'pointer',}} type='htmlcancel'>
Cancel
</Button>



    </Col>
</Row>



    </form>
  </Card>
        </div>
        </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} style={{margin:'3% 0% 0% 10%'}}>
    <Row style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        <Col xs={24} sm={24}  md={14} lg={14} xl={14} xxl={14} className="whatsappimg">
        {/* <p style={{fontSize:'40px',background:'green',borderTopLeftRadiusius:'10px'}}>&#8226;</p> */}
        <div style={{paddingTop:'20%',width:'67%',margin:'0% 0% 0% 5%',overflow:'auto',wordWrap:'break-word'}}>
        <p style={{background:'green',textAlign:'left'}}>&#x260E; &nbsp;{data===null?'9192939393939 ':data.mobilenumber}</p>      
       <div className='message-bottom' style={{overflow:'auto',wordWrap:'break-word',textAlign:'start'}}> 
      <p style={{backgroundSize:'cover'}}>{data===null?'hi your message here':data.Textmessage}</p>
      
      </div>
      <Input value={data===null?'hi your message here':data.Textmessage} style={{margin:'20% 0% 0% 0%'}} suffix={<SendOutlined />}/> 

        </div>
        
        </Col>
    </Row>
        </Col>
    </Row>
            </div>
            
            </div>
          
            </div>:<Spin style={{marginTop:'10%',color:'black',fontSize:'large',fontWeight:900}} spinning={!blur} tip='Loading...' size='large'><div className='whatsapptemp1' style={{height:'600px'}}></div></Spin>}
            </div>
  )

}
export default whatsapptemplate