import React,{useState} from 'react'
import Navbar from './Navbar'
import { Col, Row,Menu,Spin} from 'antd';
import Whatsapptemplate from '../Dashboard/Whatsapptemplate'
import 'antd/dist/antd.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Whatsappimagetemp from '../Dashboard/Whatsappimagetemp';
import Whatsappvideotemp from '../Dashboard/Whatsappvideotemp';
function Main_Page() {
const [toggle,setToggle]=useState('')
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Dashboard', 'sub1', <MailOutlined />, [
      getItem('Whatsapp', 'sub11', null, [getItem('Text', 'text'), getItem('Image', 'image'), getItem('Videos', 'video')]),
      getItem('LinkedIn', 'sub12', null, [getItem('Text', '4'), getItem('Image', '5'),getItem('Videos', '6')]),
  

      // getItem('Whatsapp', 'g1', null, [getItem('Text', '1'), getItem('Image', '2'),getItem('Videos', '3')], 'group'),
      // getItem('LinkedIn', 'g2', null, [getItem('Text 3', '4'), getItem('image', '5'),getItem('Videos', '6')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 6', '6'),
      getItem('Option 6', '7'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '8'), getItem('Option 8', '9')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '10'),
      getItem('Option 10', '11'),
      getItem('Option 11', '12'),
      getItem('Option 12', '13'),
    ]),
  ];
  const onClick = (e) => {
    console.log('click ', e);
    setToggle(e.key)
  };
const onsub=()=>{
  return <Whatsapptemplate/>

}
  return (
    <div>
      <div>
      <Navbar/>
      
      </div>
      <div>
      <Row>
    <Col sm={3} xs={3} md={3} span={5}>
    <Menu
    id='menubar'
    // style={{ backgroundColor: "black",height:'100vh',color:'white',width: 250,}} 
    theme={'dark'}
      onClick={onClick}
      // style={{
      //   width: 256,
      // }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </Col>
    <Col sm={21} xs={21} md={21} span={5}>  
    {toggle==='text'?<Whatsapptemplate value={true}/>:toggle==='image'?<Whatsappimagetemp value={true}/>:toggle==='video'?<Whatsappvideotemp value={true}/>:null}
    </Col>
  </Row>
        
      </div>
    </div>
  )
}

export default Main_Page