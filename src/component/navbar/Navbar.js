import React from 'react'
import useStyles from './style'
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const classes=useStyles();

  return (
    <div className={classes.navbar}>
            
            <div class={classes.logo}>
            <p style={{fontSize:'1.3vw',paddingLeft:'2.4vw',color:'white'}}>BENIFIT</p>
            <p style={{fontSize:'2.1vw',paddingLeft:'2.2vw',color:'white',marginTop:'-1vw'}}>WISE</p>
            </div>
            <span style={{fontSize:'1.9vw',color:'#8B789F'}}>Solutions</span>
            <span style={{fontSize:'1.9vw',color:'#8B789F'}}>Pricing</span>
            <span style={{fontSize:'1.9vw',color:'#8B789F'}}>About Us</span>
             <span style={{fontSize:'1.9vw',color:'#8B789F'}}>Login</span>
             <span style={{fontSize:'1.9vw',color:'#8B789F'}}>SignUp</span>
            
    </div>
  )
}

export default Navbar