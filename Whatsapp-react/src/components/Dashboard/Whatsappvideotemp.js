import React,{useState} from 'react'
import '../Mainpage/mainpage.css'
import { Col, Card , Row,Input,Form, Button} from 'antd';
import { useForm, Controller } from "react-hook-form";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
function Whatsappvideotemp() {
    const [data, setData] = useState(null);
    const { TextArea } = Input;
    const { handleSubmit, reset, control } = useForm();
    const onLogin=(values)=>{
        
        console.log(values);
        setData(values)
    }
   
    // const onFinishFailed=(erroe)=>{

    // }
  return (
    <div className='whatsapptemp'>
      <h1 style={{fontWeight:'900',color:"white"}}>  video Message To A Number </h1>
        <div
        >
            <div className='whatsapp-body'>
            <Row justify="start">
      <Col style={{height:'500px'}} xs={24} sm={24} md={10} lg={10} xl={10}>
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

name='mobile-number'
render={({field})=>(
    <div>
        <h3 style={{fontWeight:900,color:'green'}}>To-Mobile-number</h3>
    <PhoneInput country={'in'} {...field}/>
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
       
    <TextArea placeholder='enter the text message send ' style={{width:'84%',marginLeft:'8%',borderRadius:'5px'}} {...field}/>
        </div>
)}
/>

    </Col>
</Row>
<Row>
    <Col  xs={24} sm={24} md={4} lg={4} xl={4} style={{margin:'10% 0% 0% 30%'}} >
    <button style={{color:'white',backgroundColor:"darkblue",border:'none',fontWeight:'900',borderRadius:'10%',cursor:'pointer'}}  type='htmlType'>
send
</button>


    </Col>
    <Col  xs={24} sm={24} md={10} lg={10} xl={10} style={{margin:'10% 0% 0% 5%'}}>
    <button style={{color:'white',backgroundColor:"darkblue",border:'none',fontWeight:'900',borderRadius:'10%',cursor:'pointer'}}>
Cancel
</button>


    </Col>
</Row>



    </form>
  </Card>
        </div>
        </Col>
      <Col xs={24} sm={24} md={10} lg={10} xl={10} style={{margin:'3% 0% 0% 10%'}}>
    <Row style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} className="whatsappimg">
        {/* <p style={{fontSize:'40px',background:'green',borderTopLeftRadiusius:'10px'}}>&#8226;</p> */}
        </Col>
    </Row>
        </Col>
    </Row>
            </div>
            
            </div>
            </div>
  )
}

export default Whatsappvideotemp