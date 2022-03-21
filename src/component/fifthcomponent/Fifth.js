import React from 'react'
import back from '../images/background3.png'
const Fifth = () => {
  return (
    <div style={{textAlign:'center',marginTop:'3vw',display:'flex',flexDirection:'column',}}>
       <span style={{color:'#FFBF4C',fontSize:'2vw'}}>TESTIMONIALS</span>
        <span style={{color:'#503064',fontSize:'3vw',marginTop:'1.5vw'}}>Words from our customers</span>
        <div style={{height:'25vw',margin:'4vw',position:'relative'}}>
            <img style={{width:'100%',height:'100%',zIndex:'1'}} src={back} alt="back"/>
            <div style={{position:'absolute',bottom: '11vw',
  right: '8.8vw',color:'#9095A1'}}>
            <span style={{letterSpacing:'.2vw',fontSize:'3vw'}} >"Great rewards and</span><span style={{letterSpacing:'.2vw',fontSize:'3vw',margin:'.5vw'}}>have a excellent</span><span style={{letterSpacing:'.2vw',fontSize:'3vw'}}>customer service"</span>

            </div>
            
        </div> 
    </div>
  )
}

export default Fifth