import React from 'react'
import brand from '../images/brands.png'
const Sixth = () => {
  return (
    <div style={{textAlign:'center',marginTop:'3vw',display:'flex',flexDirection:'column'}}>
        <span style={{color:'#FFBF4C',fontSize:'2vw'}}>BRAND PARTNERS</span>
        <span style={{color:'#503064',fontSize:'3vw',marginTop:'1.5vw'}}>Providing best with 500+ Brand partners</span>
        <div style={{height:'68vw',margin:'7vw'}}>
            <img style={{width:'100%',height:'100%'}} src={brand} alt="brand"/>
        </div>
    </div>
  )
}

export default Sixth