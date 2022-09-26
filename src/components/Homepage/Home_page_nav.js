import React from 'react'
import './homepage.css'
import { Col, Row, Button } from 'antd';
import 'antd/dist/antd.css';
import Home_content from './Home_content';
function Home_page() {
  return (
    <div style={{height:'100vh'}}>
        <Row style={{height:'60px',alignItems:'center',background:'pink',alignContent:'center',backgroundImage:"linear-gradient(to right, lightgreen , white)"}}>
      <Col span={6}>
        <Row style={{alignItems:'center',textAlign:'center',cursor:'pointer'}}>
            <Col  span={20}><a id='anger1' href='/'>logo</a></Col>
        </Row>
      </Col>
      <Col style={{paddingLeft:'13%',height:'30px',}} span={18}>
        <Row style={{alignItems:'center'}}>
        <Col span={4}><a id='anger' href=''>About</a></Col>
        <Col span={4}><a id='anger' href=''>Documents</a></Col>
        <Col span={4}><a id='anger' href='/'>Pricing</a></Col>
        <Col span={4}><a id='anger' href='/'>support</a></Col>
        <Col span={4}><Button id='btn' style={{color: "rgb(39, 36, 36)",fontWeight:'900'}} type='text'>sign_up</Button></Col>
        <Col span={4}><Button id='btn' style={{color: "rgb(39, 36, 36)",fontWeight:'900'}} shape='round' type='danger'>sign_up</Button></Col>



       
       
        
        </Row>
      </Col>
    </Row>
    <Home_content/>
    </div>
  )
}

export default Home_page