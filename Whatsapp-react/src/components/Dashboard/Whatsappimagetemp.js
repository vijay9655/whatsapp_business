
import React,{useState} from 'react'
import '../Mainpage/mainpage.css'
import { Col, Card , Row,Input,Spin} from 'antd';
import Button from '@mui/material/Button';

import 'antd/dist/antd.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
function Whatsappimagetemp({value}) {
    const [data, setData] = useState(
        {
        mobilenumber:'',
        imageurl:'',
        percentage:'',
        amount:'',
    }
    );
    const [blur, setBlur] = useState(false);
    if(value===true){
        setInterval(function(){
            setBlur(true)
        },1000)    

    }
    const [mobileview,setMobileview]=useState(false)
    const mobilehandle=(values)=>{
        console.log('values',values);
        setData(()=>{
            return {
                ...data,
                "mobilenumber":values
            }
        })
       
    }
    const imagehandle=(e)=>{
       
        setData(()=>{
return {
    ...data,"imageurl":e.target.value
}
        })
      
    }
    const percentagehandle=(e)=>{
        setData(()=>{
            return {
                ...data,"percentage":e.target.value
            }
        })
        console.log('values',data.percentage);
    }
    const clothsamount=(e)=>{
        setData(()=>{
            return {
                ...data,"amount":e.target.value
            }
        })
     
    }
    const previewhandle=()=>{
        console.log('data',data);
       
        
        if( data.amount !==''  && data.imageurl !=='' && data.mobilenumber !=='' && data.percentage !=='' ){
            console.log(data.mobilenumber.length);
            if(data.mobilenumber.length==12){
                setMobileview(true)

            }
            else{
                alert('failed')
            }
        }
     
        else{
            console.log('failed');
            alert('please enter the fields')
            setMobileview(false)

        }
    }
    const sendimagemsg=()=>{
        if( data.amount !==''  && data.imageurl !=='' && data.mobilenumber !=='' && data.percentage !=='' ){
            console.log(data.mobilenumber.length);
            if(data.mobilenumber.length==12){
                axios.post('http://localhost:9000/imagemsg',data).then((res)=>{
                console.log(res.data);
                alert('successfully')
                })

            }
            else{
                alert('failed')
            }
        }
     
        else{
            console.log('failed');
            alert('please enter the fields')
            setMobileview(false)

        }

    }
    const cancelimagemsg=()=>{
        setMobileview(false)
        // var clearinputvalues=document.getElementById('clear');
        var clearinputvalues1=document.getElementById('clear1');
        var clearinputvalues2=document.getElementById('clear2');
        var clearinputvalues3=document.getElementById('clear3');

        if (clearinputvalues1.value !='' || clearinputvalues2.value !='' || clearinputvalues3.value !=''){
           
            clearinputvalues1.value =''
            clearinputvalues2.value =''
            clearinputvalues3.value =''
        
        }
       
    }
   
  return (
    <div>
    {blur===true?
    <div className='whatsapptemp'>
      <h1 style={{color:"green",paddingTop:'3%',textAlign:'left',paddingLeft:'2%',fontWeight:900}}>  Image Message To A Number </h1>
      <hr style={{height:'2px',backgroundColor:'green'}}/>
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
   
<Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
   
        <h3 style={{fontWeight:900,color:'green'}}>To-Mobile-number</h3>
    <PhoneInput id='clear' onChange={mobilehandle} country={'in'} />


    </Col> 
</Row>
<Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        
<h3 style={{fontWeight:900,color:'green'}}>Image URL</h3>

    <div>
       
    <Input id='clear1' onChange={imagehandle}  placeholder='enter the cloth image url link ' style={{width:'84%',marginLeft:'8%',borderRadius:'5px'}} />
        </div>


    </Col>
</Row>
<Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        
<h3 style={{fontWeight:900,color:'green'}}>Web Link</h3>

    <div>
       
    <Input id='clear2'  onChange={percentagehandle} placeholder='enter the percentage of discounts' style={{width:'84%',marginLeft:'8%',borderRadius:'5px'}} />
        </div>


    </Col>
</Row>
<Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        
<h3 style={{fontWeight:900,color:'green'}}>Amount &#x20B9;</h3>

    <div>
       
    <Input id='clear3' onChange={clothsamount} placeholder='enter the cloths amount' style={{width:'84%',marginLeft:'8%',borderRadius:'5px'}} />
        </div>
    </Col>
</Row>
<Row style={{width:'80%',margin:'auto',justifyContent:'space-evenly',paddingTop:'7%',alignItems:'center'}}>
    <Col>
    <Button onClick={previewhandle}  variant="outlined" style={{border:'1px solid blue',background:'blue',color:'white',fontWeight:'600',}}>
Preview
</Button>



    </Col>
    <Col>
    <Button onClick={sendimagemsg} variant="outlined" style={{border:'1px solid blue',color:'white',fontWeight:'600',background:'blue',}}>
send
</Button>



    </Col>
    <Col>
    <Button onClick={cancelimagemsg} variant="outlined" style={{border:'1px solid blue',color:'white',fontWeight:'600',background:'blue'}}>
Cancel
</Button>


    </Col>
</Row>



  
  </Card>
        </div>
        </Col>
     {mobileview===true? 
     <Col xs={24} sm={24} md={10} lg={10} xl={10} style={{margin:'3% 0% 0% 10%'}}>
    <Row style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        <Col xs={24} sm={24}  md={14} lg={14} xl={14} xxl={14} className="whatsappimg">
        {/* <p style={{fontSize:'40px',background:'green',borderTopLeftRadiusius:'10px'}}>&#8226;</p> */}
        <div style={{paddingTop:'20%',width:'67%',margin:'0% 0% 0% 5%',overflow:'auto',wordWrap:'break-word'}}>
        <p style={{background:'green',textAlign:'left'}}>&#x260E; &nbsp;{data===null?'9192939393939 ':data.mobilenumber}</p>      
      
      
      <div style={{height:'100px',width:'80%',backgroundSize:'cover',backgroundColor:'white'}}>
        <img style={{height:'100%',width:'100%',padding:'2%'}} src={data.imageurl}/>
      </div>
      <div style={{textAlign:'start',background:'white',width:'80%',fontSize:'10px'}}>
            Big Billion days discount {data.percentage}% and price upto &#x20B9;{data.amount}
        </div>
      
      
     
      {/* <Input  style={{margin:'18% 0% 0% 0%'}} suffix={<SendOutlined />}/>  */}

        </div>
        
        </Col>
    </Row>
        </Col>
        :null}
    </Row>
            </div>
            
            </div>
            </div>
            :<Spin style={{marginTop:'10%',color:'black',fontSize:'large',fontWeight:900}} spinning={!blur} tip='Loading...' size='large'><div className='whatsapptemp1' style={{height:'600px'}}></div></Spin>}
            </div>
  )
}

export default Whatsappimagetemp