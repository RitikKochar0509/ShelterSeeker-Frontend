import { Box } from '@mui/material'
import React from 'react'
import SingleCard from './SingleCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CardContainer = () => {

  const propertiesData = useSelector((store)=>store.properties.propertiesArray);
  const filters = useSelector((store)=>store.filterData.name);
  const filteredData = propertiesData.filter((d) => {
    return (
      d.propertyLocation === filters.city ||
      d.propertyName === filters.name ||
      d.propertyRent === filters.price
    );
  });
  
  return (

    <Box sx ={{display:'grid',gridTemplateColumns: "repeat(auto-fit, minmax(350px, auto))", rowGap:4}}>
       
      {
      filteredData && filteredData.length>0  ?  filteredData.map((data) => <Link key = {data._id} style={{textDecoration:'none'}} to={`/property?id=${data._id}`}> <SingleCard data = {data} /> </Link>) :
      propertiesData && propertiesData.map((data) => <Link key = {data._id} style={{textDecoration:'none'}} to={`/property?id=${data._id}`}> <SingleCard data = {data} /> </Link>)
      }
       
    </Box>

  )
}

export default CardContainer