import { Box,Button,Autocomplete,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { gray,red } from '../color'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilter } from '../utils/filterPropertySlice'
const Filter = () => {
  const dispatch = useDispatch();
  const propertiesData = useSelector((store)=>store.properties.propertiesArray);
  let cityArray = [];
  let priceArray = [];
  let propertyNameArray = [];

  const [name,setName] = useState('');
  const [city,setCity] = useState('');
  const [price,setPrice] = useState('');

  const filters = useSelector((store)=>store.filterData.name);
  const filteredData = propertiesData.filter((d) => {
    return (
      d.propertyLocation === filters.city ||
      d.propertyName === filters.name ||
      d.propertyRent === filters.price
    );
  });
  
  propertiesData.map((d)=>{
    cityArray.push(d.propertyLocation);
    priceArray.push(d.propertyRent);
    propertyNameArray.push(d.propertyName)
  })
  const handleFilter = ()=>{
    dispatch(applyFilter({
      name,city,price
    }))

  }

  const clearFilter = () =>{
dispatch(applyFilter(''));
setName('');
setPrice('');
setCity('');
    
  }


  return (
    <Box sx ={{m:4}}>
        <Typography sx = {{px:1, fontSize:'18px',fontWeight:700,color:gray[700],mb:2}}>Search Property for Rent</Typography>
    <Box sx = {{ display:'flex', justifyContent:'space-between',border:`1px solid ${gray[300]}`,borderRadius:4,py:2,px:8,alignItems:'center',background:gray[200],mx:1 }}>
        <Box>
            <Typography sx = {{mb:0.5, fontSize:'14px',fontWeight:500,color:gray[600]}}>City</Typography>
            <Autocomplete sx = {{width:'250px'}}
            value = {city}
            onChange={(event, newValue) => {
              setCity(newValue);
            }}

                options={cityArray}
                size='small'
                renderInput={(params) => <TextField {...params} variant='standard'  />}
    />
        </Box>
            
    
        <Box>
        <Typography sx = {{fontSize:'14px',fontWeight:500,color:gray[600]}}>Price</Typography>
        <Autocomplete
        value={price}
        onChange={(event, newValue) => {
          setPrice(newValue);
        }}
        
        sx = {{width:'250px'}}
      disablePortal
      options={priceArray}
      size='small'
      renderInput={(params) => <TextField {...params} variant='standard'  />}
    />
        </Box>
        <Box>
        <Typography sx = {{fontSize:'14px',fontWeight:500,color:gray[600]}}>Property Name </Typography>
        <Autocomplete
        value={name}
        onChange={(event, newValue) => {
          setName(newValue);
        }}
        
        sx = {{width:'250px'}}
      disablePortal
      options={propertyNameArray}
      size='small'
      renderInput={(params) => <TextField {...params} variant='standard'  />}
    />
        </Box>
        <Box>
          {
            filteredData && filteredData.length>0 ?
            <Button onClick={clearFilter} variant='contained' sx = {{background:red[600],borderRadius:'10px'}}>Reset</Button>
:
<Button onClick={handleFilter} variant='contained' sx = {{background:red[600],borderRadius:'10px'}}>Apply</Button>


          }
       </Box>
        
    </Box>
    </Box>
  )
}

export default Filter