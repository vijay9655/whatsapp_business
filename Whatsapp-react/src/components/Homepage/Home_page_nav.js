import React,{useState} from 'react'
import './homepage.css'
import { Col, Row, Button,Modal,Input,Checkbox, Form} from 'antd';
import 'antd/dist/antd.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Home_content from './Home_content';

function Home_page() {
  const [open,setOpen]=useState(false)
  const [sign_up,setSign_up]=useState(false)
  const [sign_in,setSign_in]=useState(false)
  const [showregister,setShowregister]=useState(false)
 
 

  const Login =(val)=>{
    setOpen(!open)
    console.log(val);
    if(val==='signin'){
      setSign_in(!sign_in)
      setShowregister(false)
    }
    else{
      setSign_up(!sign_up)
      setShowregister(true)
    }
  }



  const Registerhandle=()=>{
    setShowregister(!showregister)
      }





  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div style={{height:'100vh'}}>
        <Row style={{height:'60px',alignItems:'center',background:'pink',alignContent:'center',backgroundImage:"linear-gradient(to right, lightgreen , white)"}}>
      <Col span={6}>
        <Row style={{alignItems:'center',textAlign:'center',cursor:'pointer'}}>
            <Col  span={20}><a id='anger1' href='/'><img style={{width:'20%'}} src='./whatsapp.png'/><span style={{fontWeight:'900',fontSize:'20px',color:'green'}}>Whatsapp</span></a></Col>
        </Row>
      </Col>
      <Col style={{paddingLeft:'13%',height:'30px',}} span={18}>
        <Row style={{alignItems:'center'}}>
        <Col sm={12} xs={12} md={4} span={4}><a id='anger' href=''>About</a></Col>
        <Col sm={12} xs={12} md={4} span={4}><a id='anger' href=''>Documents</a></Col>
        <Col sm={12} xs={12} md={4} span={4}><a id='anger' href='/'>Pricing</a></Col>
        <Col sm={12} xs={12} md={4} span={4}><a id='anger' href='/'>Support</a></Col>
        <Col sm={12} xs={12} md={4} span={4}><Button id='btn' style={{color: "rgb(39, 36, 36)",fontWeight:'900'}} onClick={()=>Login('signin')} type='text'>SignIn</Button></Col>
        <Col sm={12} xs={12} md={4} span={4}><Button id='btn' style={{color: "rgb(39, 36, 36)",fontWeight:'900'}} onClick={()=>Login('signup')} shape='round' type='danger'>SignUp</Button></Col>

        </Row>
      </Col>
    </Row>
    {/* modal */}
    <Modal
        title="User Registration"
        centered
        open={open}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
        
      >
        <Row style={{textAlign:'center',padding:'0% 0% 10% 0%'}} >
          <Col span={12}>
            
            <button id={showregister===true?'modalbtn':'modalbtn1'}  onClick={Registerhandle}>Login</button>

            
          </Col>
          <Col span={12}>
          <button id={showregister===false?'modalbtn':'modalbtn1'}  onClick={Registerhandle}>Register</button>
        
          </Col>

        </Row>
        <Row>
          <Col style={{textAlign:'center'}} span={24}>
            
         {showregister===false?<div>

          <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={{width:'250px'}} />
      </Form.Item>
      
      

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{width:'250px'}} />
      </Form.Item>

      <Form.Item style={{textAlign:'start'}}
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
<Row style={{padding:'0% 0% 0% 23%'}}>
  <Col  span={15}>
    <Row>
      <Col  span={12}  >
      <Form.Item 
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <button id='submitbtn1' type="primary" htmlType="submit">
          Submit
        </button>
      </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item 
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <button onClick={Login} id='submitbtn'>
          Cancel
        </button>
      </Form.Item>
      </Col>
    </Row>
  
  </Col>
 
</Row>
     
    </Form>
          </div>:<div>

<Form
name="basic"
labelCol={{
span: 6,
}}
wrapperCol={{
span: 16,
}}
initialValues={{
remember: true,
}}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item
label="Username"
name="username"
rules={[
{
  required: true,
  message: 'Please input your username!',
},
]}
>
<Input style={{width:'250px'}} />
</Form.Item>
<Form.Item
label="E-mail"
name="email"
rules={[
{
  required: true,
  message: 'Please input your email!',
},
]}
>
<Input type='email' style={{width:'250px'}} />
</Form.Item>
<Form.Item
label="Mobile Number"
name="mobilenumber"
rules={[
{
  required: true,
  message: 'Please input your Mobile_Number!',
},
]}
>
<PhoneInput country={'in'} />
</Form.Item>



<Form.Item
label="Password"
name="password"
rules={[
{
  required: true,
  message: 'Please input your password!',
},
]}
>
<Input.Password style={{width:'250px'}} />
</Form.Item>
<Form.Item style={{textAlign:'center'}}
name="remember"
valuePropName="checked"
wrapperCol={{

span: 16,
}}
>
<Checkbox>Remember me</Checkbox>
</Form.Item>
<Row style={{margin:'0% 0% 0% 30%'}}>
<Col  span={15}>
<Row>
<Col xs={24} md={12} span={12}  >
<Form.Item 
wrapperCol={{

span: 16,
}}
>
<button id='submitbtn1' type="primary" htmlType="submit">
Register
</button>
</Form.Item>
</Col>
<Col xs={24} md={12} span={12}>
<Form.Item 
wrapperCol={{
span: 16,
}}
>
<button  onClick={Login} id='submitbtn'>
Cancel
</button>
</Form.Item>
</Col>
</Row>

</Col>

</Row>

</Form>
</div>}
          </Col>
        </Row>
      </Modal>
    {/* end */}
    <Home_content/>
    </div>
  )
}

export default Home_page