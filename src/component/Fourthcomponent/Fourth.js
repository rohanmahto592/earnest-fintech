import React from 'react'
import line from '../images/Line1.png'
const Fourth = () => {
  return (
    <div style={{textAlign:'center',marginTop:'5vw',display:'flex',flexDirection:'column'}}>
        <span style={{color:'#FFBF4C',fontSize:'2vw'}}>OUR PARTNERS IN EXPANSION</span>
        <span style={{color:'#503064',fontSize:'3vw',marginTop:'1.5vw'}}>Running Successfully with 50+ companies</span>
        <div  style={{height:'10vw',margin:'2vw',display:'flex',flexDirection:'column'}}>
        <img style={{width:'90%',height:'12',marginTop:'2vw'}} src={line} alt="line"/><br/>
        <img style={{width:'90%',height:'12%'}} src={line} alt="line"/><br/>
        <img style={{width:'90%',height:'12%'}} src={line} alt="line"/>
        </div>
    </div>
  )
}

export default Fourth