import React from 'react'
import './homepage.css'
import { Col, Row} from 'antd';
import 'antd/dist/antd.css';
import Button from '@mui/material/Button';

function Home_content() {
  return (
    <div>
        <Row style={{padding:'5% 0% 0% 0%'}}>
        <Col xs={24} md={12} span={12}>
            <h1 className='h1' style={{color:"green"}}>WhatsApp Business API & <br/> Integration API.</h1>
            <h3 id='h3'>The phone number you are using is not connected to any other WhatsApp account.</h3>
            <h3 id='h3'>You have a Meta (Formerly known as Facebook) business account</h3>
            <h3 id='h3'>You have a verified Meta business manager account.</h3>
            {/* <h3 id='h3'>If you have a phone number with an IVR system it should be temporarily disabled during the signup process.</h3>
            <h3 id='h3'>You have access to the phone number and you can verify it through SMS or Voice call during the signup process.</h3> */}
        </Col>
        <Col xs={24} md={12} span={12}>
           {/* <img style={{borderRadius:'10px',width:'100%'}} src='./WhatsApp-Cloud.gif'/> */}
        </Col>

    </Row>

    </div>
  )
}

export default Home_content