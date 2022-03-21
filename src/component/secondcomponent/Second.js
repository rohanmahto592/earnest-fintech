import React from 'react'
import useStyles from './secondstyle'
import background2 from '../images/background2.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Card,Grid,Typography,CardContent} from '@material-ui/core'
const content=[
     {
       "upper1":<ArrowUpwardIcon style={{color:'white',fontSize:'3.5vw',marginRight:'-1vw'}}/>,"upper":<ArrowUpwardIcon style={{color:'white',fontSize:'4.5vw'}}/>, "name":5,"symbol":'x','description':'Employee Engagement'
     },
     {
        "name":40,"symbol":'%','description':'Increase Participation'
     },
     {
        "upper1":<ArrowDownwardIcon style={{color:'white',fontSize:'3.5vw',marginRight:'-1vw'}}/>,"upper":<ArrowDownwardIcon style={{color:'white',fontSize:'4.5vw'}}/>,"name":7,"symbol":'%','description':'Reduce Absenteeism'
     },
     {
        "name":20,"symbol":'%','description':'Increase peer-to-peer recognition'
     },
     {
        "upper1":<ArrowUpwardIcon style={{color:'white',fontSize:'3.5vw',marginRight:'-1vw'}}/>,"upper":<ArrowUpwardIcon style={{color:'white',fontSize:'4.5vw'}}/>,"name":5,"symbol":'%','description':'Boost in work culture'
     },
     {
        "name":15,"symbol":'%','description':'Increase in Employee Loyalty'
     }
]
const Second = () => {
    const classes=useStyles();
  return (
    <div style={{backgroundImage:`url(${background2})`}} className={classes.second}>
        <span style={{fontSize:'2vw',color:'#FFBF4C',fontWeight:'bold'}}>Need</span><br/>
        <span style={{fontSize:'3.5vw',color:'#503064',fontWeight:'bold'}}>Why Employee benift is Important ?</span>
        <div style={{margin:'5vw'}}>
            <Grid  container alignItems="flex-end" spacing={4} >
                {
                    content.map((item)=>(
                    <Grid item xs={4} md={4}  lg={4}>
                        <Card style={{width:'25vw',height:'25vw',backgroundColor:'#2C4EA8',borderRadius:'1.2vw'}}>
                <CardContent>
                    {item.upper1}
                   {item.upper}
                    <span style={{fontSize:'7vw',color:'#FFBF4C'}}>{item.name}</span><span style={{fontSize:'7vw',color:'#FFBF4C'}}>{item.symbol}</span>
                </CardContent>
                <div style={{display:'flex',flexDirection:'column',margin:'1vw',marginTop:'-2vw'}}>
                <Typography style={{fontSize:'2.5vw',color:'white'}}>{item.description}</Typography>
                </div>

            </Card>
            </Grid>

                    ))

            
                }
            </Grid>
        </div>
    </div>
  )
}

export default Second