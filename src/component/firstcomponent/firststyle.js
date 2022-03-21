import { makeStyles } from "@material-ui/core";

export default makeStyles({
    first:{
        display:'flex',
        justifyContent:'space-around'
        
    },
    mob:{
        borderRadius:'3vw',
        margin:'5vw',
        border:'1.2vw solid black',
         height:'40vw',
         width:'40vw',
         boxShadow: '0 8px 6px -6px black',
         
    },
    image:{
        borderRadius:'3vw',
        width:'100%',
        height:'100%'
    }
    ,
    content:{
        display:'flex',
        flexDirection:'column',
        margin:'2vw'
        
    }
    




})