import React from 'react'
import useStyles from './firststyle'
import background1 from '../images/background1.jpeg'
import mobile from '../images/mobile.png'
import Rectangle from '../images/Rectangle.png'
import { minWidth } from '@mui/system';
const First = () => {
    const classes=useStyles();
  return (
    <div style={{backgroundImage:`url(${background1})`,backgroundRepeat:'no-repeat'}} className={classes.first} >
    <div className={classes.content}>
       <div style={{marginTop:'5vw'}}>
           <span style={{color:'#503064',fontSize:'6vw'}}>Provide</span><span style={{color:'#FFBF4C',fontSize:'6vw',paddingLeft:'1vw'}}>Unmatched</span><span style={{color:'#FFBF4C',fontSize:'6vw',paddingLeft:'1vw'}}>Perks</span>
       </div>
       <div style={{marginTop:'1vh'}}>
           <span style={{color:'#503064',fontSize:'6vw'}}>and</span><span style={{color:'#FFBF4C',fontSize:'6vw',paddingLeft:'1vw'}}>Retain </span><span style={{color:'#FFBF4C',fontSize:'6vw',paddingLeft:'1vw'}}>Top</span><span style={{color:'#FFBF4C',fontSize:'6vw',paddingLeft:'1vw'}}>Talent</span>
       </div>
       <div style={{display:'flex',flexDirection:'column',marginTop:'2vw'}}>
         <span style={{color:'#8A789E',fontSize:'2.4vw'}}>Our flexible employee benift program can help employess save money on taxes.</span>
         <span style={{color:'#8A789E',fontSize:'2.4vw'}}>Simply replace meal coupons,food carts,Gift cards,digitise employee tax benifts programs.</span>
         <span style={{color:'#8A789E',fontSize:'2.4vw'}}>Add tax-free perks to the card online to help your employees saved money on taxes.</span>
         <div style={{background:`url(${Rectangle})`,height:'5vw',marginTop:'4vw',marginLeft:'-1.5vw',display:'flex',flexDirection:'flex-start'}}>
           <p style={{marginLeft:'3.2vw',color:'#5874BE',fontSize:'1.5vw'}}>Recognized by </p><p style={{marginLeft:'.6vw',color:'#F15B22',fontSize:'1.5vw'}}>#StartupIndia</p>
         </div>
       </div>
    </div>

    <div className={classes.mob}> 
        <img className={classes.image} src={mobile}/>
    </div>
    </div>
  )
}

export default First