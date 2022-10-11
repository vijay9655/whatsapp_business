import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Col, Row, Button,Avatar} from 'antd';
import './mainpage.css'
import 'antd/dist/antd.css';
function Navbar() {
  return (
    <div>  <Row style={{height:'60px',alignItems:'center',alignContent:'center',backgroundImage:"linear-gradient(to right, lightgreen , white)"}}>
    <Col span={4}>
      <Row style={{alignItems:'center',textAlign:'center',cursor:'pointer',padding:'0% 0% 0% 10%'}}>
          <Col  span={20}><a id='anger1' href='/'><img style={{width:'20%'}} src='./whatsapp.png'/><span style={{fontWeight:'900',fontSize:'20px',color:'green'}}>Whatsapp</span></a></Col>
      </Row>
    </Col>
    <Col style={{paddingLeft:'13%',height:'30px',}} span={20}>
      <Row style={{alignItems:'center'}}>
      <Col sm={12} xs={12} md={4} span={4}><a id='mainanger' href=''>Dashboard</a></Col>
      <Col sm={12} xs={12} md={4} span={4}><a id='mainanger' href=''>Documents</a></Col>
      <Col sm={12} xs={12} md={4} span={4}><a id='mainanger' href='/'>Pricing</a></Col>
      <Col sm={12} xs={12} md={4} span={4}><a id='mainanger' href='/'>Support</a></Col>
      <Col sm={12} xs={12} md={8} span={4}>
        {/* <Button id='btn' style={{color: "rgb(39, 36, 36)",fontWeight:'900',padding:'5px 5px 5px 5px'}}  shape='circle' type='text'><img src='./'/></Button> */}
        <Avatar size={40} icon={<UserOutlined />} />
        </Col>
      {/* <Col sm={12} xs={12} md={4} span={4}><Button id='btn' style={{color: "rgb(39, 36, 36)",fontWeight:'900'}}  shape='round' type='danger'>SignUp</Button></Col> */}

      </Row>
    </Col>
  </Row></div>
  )
}

export default Navbar