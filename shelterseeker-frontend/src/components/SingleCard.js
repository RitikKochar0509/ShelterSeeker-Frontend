import React from 'react';
import { Box, Card, Divider, Typography } from '@mui/material';
import { gray, red } from '../color';

const SingleCard = ({ data }) => {
  return (
    <Box sx={{ mx: 5, display: 'flex' }}>
      <Card
        sx={{
          background: gray[100],
          borderRadius: '10px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          style={{ maxWidth: '100%', height: '150px' }}
          src={data.image}
          alt="logo"
        />
        <Box sx={{ px: 2, py: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: red[600] }}>
            {data.propertyRent}/<span style={{ fontSize: '14px', color: gray[500] }}>month</span>
          </Typography>
          <Typography sx={{ my: 0.5, fontSize: '16x', fontWeight: 600, color: gray[700] }}>
            {data.propertyName}
          </Typography>
          <Typography sx={{ fontSize: '12px', fontWeight: 500, color: gray[900] }}>
            {data.propertyLocation}
          </Typography>
          <Divider />
          <Typography sx={{ mt: 1, fontSize: '12px', fontWeight: 700, color: gray[900] }}>
            {data.propertyDescription}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default SingleCard;
