import { Box, Typography,Card } from '@mui/material'
import React from 'react'
import { gray, red,blue } from '../color'
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ItemCSS = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    p:1,
    border:`1px solid ${gray[200]}`,
    mb:2,
    borderRadius:'10px',
    background:blue[100],
}
const titleCss = {
    fontSize:'16px',
    fontWeight:700,
    color:gray[500],
}
const descriptionCss={
    fontSize:'16px',
    fontWeight:700,
    color:gray[700],
}
const OwnerTitleCss ={
    fontSize:'20px',
    fontWeight:800,
}
const OwnerDescriptionCss = {
    fontSize:'20px',
    fontWeight:'600',
    color:blue[500],
    marginLeft:'10px'
}
const CardDescription = () => {
    const [searchParams] = useSearchParams();
  const propertiesData = useSelector((store)=>store.properties.propertiesArray);
   
  const Data = propertiesData.filter((data)=>data._id===searchParams.get("id"));
const filterData = Data[0];
  return (
    <Box sx ={{mt:12,mx:6,}}>
    <Box sx ={{display:'grid',gridTemplateColumns:["1fr","1fr","4fr 2fr"],rowGap:[3,2,1]}}>
        <Box>
        <Typography sx = {{fontSize:'24px',fontWeight:700,color:gray[500],mb:2}} >{filterData.propertyName}</Typography>
        <img style = {{ maxWidth:'100%', width:'700px',height:'400px',borderRadius:'10px'}} src = {filterData.image} alt = "img"></img>
        </Box>
        <Card sx = {{borderRadius:'10px',border:`1px solid ${gray[200]}`,boxShadow:'none',background:gray[25],p:2}}>
        <Typography sx = {{textAlign:'center',fontSize:'20px',fontWeight:700,color:red[500],mb:2}} >Apprartment Description</Typography>
           <Box>
            <Box sx = {ItemCSS}>
                <Typography sx ={titleCss}>Name</Typography>
                <Typography sx={descriptionCss}>{filterData.propertyName}</Typography>
            </Box>
            <Box sx ={ItemCSS}>
                <Typography sx ={titleCss}>Rent</Typography>
                <Typography sx={descriptionCss}>{filterData.propertyRent}/month</Typography>
                
            </Box>
            <Box sx ={ItemCSS}>
                <Typography sx ={titleCss}>Location</Typography>
                <Typography sx={descriptionCss}>{filterData.propertyLocation}</Typography>
                
            </Box>
            <Box sx ={ItemCSS}>
                <Typography sx ={titleCss}>Description</Typography>
                <Typography sx={descriptionCss}>{filterData.propertyDescription}</Typography>
                
            </Box>
            <Box sx ={ItemCSS}>
                <Typography sx ={titleCss}>Availablity</Typography>
                <Typography sx={descriptionCss}>{filterData.proertyAvailability}</Typography>
                
            </Box>
            </Box>
        </Card>


    </Box>
    <Box sx ={{mb:2}}>
    <Typography sx = {{fontSize:'24px',fontWeight:700,color:gray[500],mb:2}} >Owner Details</Typography>

        <Box sx = {{display:'flex'}}>
            <Typography sx ={OwnerTitleCss} >Name</Typography>
            <Typography sx={OwnerDescriptionCss}>{filterData.ownerName}</Typography>
        </Box>
        <Box sx = {{display:'flex'}}>
            <Typography sx={OwnerTitleCss}>Email</Typography>
            <Typography sx={OwnerDescriptionCss}>{filterData.ownerEmail}</Typography>
        </Box>
        <Box sx = {{display:'flex'}}>
            <Typography sx={OwnerTitleCss}>Contact</Typography>
            <Typography sx ={OwnerDescriptionCss}>{filterData.ownerContact}</Typography>
        </Box>
        
    </Box>
    </Box>
  )
}

export default CardDescription