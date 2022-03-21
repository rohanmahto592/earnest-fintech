import React from 'react'
import footer from '../images/footer.png'
import google from '../images/google.png'
import google2 from '../images/google2.png'
const Footer = () => {
  return (
    <div style={{background:`url(${footer})`,height:'32vw',display:'flex',flexDirection:'row',justifyContent:'space-around',position:'relative',backgroundRepeat:'no-repeat'}}>
    <div style={{display:'flex',flexDirection:'row',width:'20vw'}}>
        <div style={{display:'inline',backgroundColor:'#FFBF4C',position:'absolute',
        borderRadius:'5vw',
        minWidth:'10vw',
        top:'.5vw',
        marginLeft:'-4vw',
        marginTop:'1vw'
        }}>
        <p style={{fontSize:'1.3vw',paddingLeft:'2.4vw',color:'white'}}>BENIFIT</p>
        <p style={{fontSize:'2.1vw',paddingLeft:'2.2vw',color:'white',marginTop:'-1vw'}}>WISE</p>
        </div>
        <div style={{marginTop:'10vw',marginLeft:'-4vw',display:'flex',flexDirection:'column',color:'#503064'}}>
            <span style={{fontSize:'2.2vw'}}>We envision a world where employess are highly</span><span style={{fontSize:'2.2vw'}}>engaged and very happy at their work.Join us in our journey today!!</span>
            <span style={{color:'red',fontSize:'2.2vw',marginTop:'1vw'}}>#startupindia</span>
        </div>
    
    </div>
    
    <div style={{textAlign:'center',display:'flex',flexDirection:'column',width:'10vw',marginLeft:'-15vw'}}>
    <span style={{color:'#503064',fontSize:'3vw',marginTop:'3vw'}}>About</span>
        <span style={{fontSize:'2vw',color:'#503064',marginTop:'3vw'}}>About us</span>
        <span style={{fontSize:'2vw',color:'#503064',marginTop:'1.5vw'}}>Contact us</span>
        <span style={{fontSize:'2vw',color:'#503064',marginTop:'1.5vw'}}>Carrer</span>

    </div>
    <div style={{textAlign:'center',display:'flex',flexDirection:'column',width:'20vw',marginLeft:'-20vw'}}>
    <span style={{color:'#503064',fontSize:'3vw',marginTop:'3vw'}}>Legal</span>
        <span style={{fontSize:'2vw',color:'#503064',marginTop:'3vw'}}>Term of use</span>
        <span style={{fontSize:'2vw',color:'#503064',marginTop:'2vw'}}>Privacy Policy</span>
        

    </div>
    <div style={{textAlign:'center',display:'flex',flexDirection:'column',width:'30vw',marginLeft:'-20vw'}}>
    <span style={{color:'#503064',fontSize:'3vw',marginTop:'3vw'}}>Download The App</span>
    <span style={{fontSize:'2vw',color:'#503064',marginTop:'3vw'}}>Take just 30 sec to Download!</span>
    <div style={{width:'20vw',marginTop:'2vw',marginLeft:'2vw'}}>
    <img style={{width:'100%',height:'100%'}} src={google} alt="googl"/>
    </div>
    <div style={{width:'20vw',marginTop:'2vw',marginLeft:'2vw'}}>
    <img style={{width:'100%',height:'100%'}} src={google2} alt="googl"/>
    </div>
    </div>
    

    
    </div>
  )
}

export default Footer