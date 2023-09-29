import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { blue } from '../color';
import { useDispatch } from 'react-redux';
import { checkIsLogin } from '../utils/userSlice';

const Signup = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [resp,setResp] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://backend-fpbe.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), 
      });

      const data = await response.json();

      console.log(data);
      setResp(data.message);

      dispatch(
        checkIsLogin({
          isSignup: response.ok ? true : false,
          userEmail: response.ok ? email : '',
        })
      );
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      { resp && resp.length>0 ? resp:
        <><Typography sx={{ fontSize: '20px', fontWeight: 700, alignItems: 'center', mb: 2, color: blue[700] }}>
        Signup
      </Typography>
      <Typography sx={{ fontSize: '14px', fontWeight: 600 }}> Email Address</Typography>
      <TextField size="small" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button variant="contained" sx={{ my: 2 }} onClick={handleSubmit}>
        Signup
      </Button>
      </>
      }
    </Box> 
  );
};

export default Signup;
