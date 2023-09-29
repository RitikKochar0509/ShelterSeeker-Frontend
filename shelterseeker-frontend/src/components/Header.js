import React from 'react'
import {Box,Button,Avatar,Typography,Modal} from '@mui/material'
import { blue, gray,red } from '../color'
import Signup from './Signup'
import { useSelector } from 'react-redux';
import Login from './Login';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [loginOpen, setLoginOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);
    
    const singupStatus = useSelector((store)=>store.user.isSignup);
    
  return (
    <Box sx ={{position:'fixed',top:0,width:'100%',zIndex:2}}>
        <Box sx = {{display:'flex',justifyContent:'space-between',px:4,py:1,alignItems:'center',background:'#dee2e6',borderBottom:1,borderColor:gray[200]}}>
       <Box>
            <Button sx={{color:'#403d39',fontSize:'16px',fontWeight:600, textTransform: "capitalize", "&:hover":{background:'none'} }} size='medium'  startIcon={<img style = {{height:'40px',width:'40px'}} src=  {"https://media.istockphoto.com/id/1254919969/vector/life-buoy-icon-vector-logo-design-template.jpg?s=612x612&w=0&k=20&c=bzPV_gJ0nmF8TTqGDiIOOzn1MYs050cH2brT2-cyIjg="} alt = 'lgogo'/>}>ShelterSeeker</Button>
           {singupStatus.isSignup &&  <Button sx = {{mx:2}}>Explore</Button> }
       </Box>
       <Box>
     { singupStatus.isSignup===true  ? <Button size="medium"
                sx={{px:2, color:gray[900], textTransform: "capitalize", }}
                startIcon={
                        <Avatar
                            sx={{  backgroundColor: red[600], color: 'white', textTransform: "capitalize" }}
                        >
                            {singupStatus.userEmail[0]}
                        </Avatar>
                    }
                    color="secondary"
                >
                </Button>
                
                :

                <Box sx = {{mr:2}}>
                    <Button variant='contained' size="medium" onClick={handleOpen}
                    sx={{px:2,mr:2,borderRadius:'10px',background:blue[700],  textTransform: "capitalize",color:'white' }}>
                    Signup
                </Button>
                <Button size="medium"variant='contained' onClick={handleLoginOpen}
                sx={{px:2, borderRadius:'10px', background:blue[700], textTransform: "capitalize",color:'white' }}
                >
                    Login
                </Button>
                    
                </Box>
}
       </Box>
       </Box>
       <div>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
   {<Signup/> } 
      </Box>
    </Modal>
  </div>
  <div>
    <Modal
      open={loginOpen}
      onClose={handleLoginClose}
    >
      <Box sx={style}>
   {<Login/> } 
      </Box>
    </Modal>
  </div>
    </Box>
  )
}

export default Header