import React from 'react'
import {Grid,Card,Typography,Button} from '@material-ui/core'
import logo from '../images/logo.png'
import tree from '../images/tree.png'
import perk from '../images/perk.png'
import phone from '../images/phone.png'

const Third = () => {
   
  return (
    <div style={{textAlign:'center'}}>
   <span style={{fontSize:'2vw',color:'#FFBF4C',fontWeight:'bold'}}>BENIFITS</span><br/>
    <span style={{fontSize:'3.5vw',color:'#503064',fontWeight:'bold'}}>Why Benefit Wise ?</span>
    <Grid style={{marginTop:'1.5vw'}} container >
        <Grid item xs={12} md={12} lg={12}>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'2vw'}}>
            <span style={{fontSize:'2.5vw',color:'#503064',marginTop:'1.5vw'}}>Tax free Benefits</span>
            <span style={{marginTop:'1.5vw',color:'#8A789E',fontSize:'1.8vw'}}>Tax saving benefits upto Rs.75,000 with a Co-pay option available for higher value transactions.</span>
            </div>
            <div style={{marginRight:'4vw'}} >
                <img style={{width:'25vw'}} src={tree}/>
            </div>

        </div>
            
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        <div style={{marginLeft:'4vw'}} >
        <img style={{width:'25vw'}} src={logo}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginRight:'2vw'}}>
            <span style={{fontSize:'2.5vw',color:'#503064',marginTop:'1.5vw'}}>Rewards and Recognision</span>
            <span style={{marginTop:'1.5vw',color:'#8A789E',fontSize:'1.8vw'}}>Employee Recognision program that drives he bussiness growth.An experience that is fun ,timely and reinforcesthe right employment. </span>
            </div>
        </div>
            
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
        <div style={{display:'flex',justifyContent:'space-around'}}>
        
            <div style={{display:'flex',flexDirection:'column',marginLeft:'2vw'}}>
            <span style={{fontSize:'2.5vw',color:'#503064',marginTop:'1.5vw'}}>Advantage card</span>
            <span style={{marginTop:'1.5vw',color:'#8A789E',fontSize:'1.8vw'}}>Meal, fuel, communication, gifts and other digital tax benefits using out Razor card for hassle free tax benefits which can be used in 100+ outlets in India.</span>
            </div>
            <div  style={{marginRight:'4vw'}}  >
              <img style={{width:'25vw'}} src={phone}/>
            </div>
        </div>
            
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
        <div style={{display:'flex',justifyContent:'space-around'}}>
           <div style={{marginLeft:'4vw'}} >
              <img style={{width:'25vw'}} src={perk}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginRight:'2vw'}}>
            <span style={{fontSize:'2.5vw',color:'#503064',marginTop:'1.5vw'}}>Perks</span>
            <span style={{marginTop:'1.5vw',color:'#8A789E',fontSize:'1.8vw'}}>Exclusive corporate deals, discounts  and cashback on 400+ brands all over India. Prioritize thhe well being of employees by enabling savings with perks in every sphere of life.</span>
            </div>
            
        </div>
            
        </Grid>
        
    </Grid>
    <Button style={{color:'white',backgroundColor:'#2C4EA8',paddingLeft:'3vw',paddingRight:'3vw',paddingTop:'.5vw',paddingBottom:'.5vw'}} >Learn More</Button>
    </div>
  )
}

export default Third