import React,{useEffect} from 'react'
import CardContainer from './CardContainer'
import Filter from './Filter'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getProperties } from '../utils/AllPropertySlice'
const MainPage = () => {
  const dispatch = useDispatch();
  
  const fetchData = async () =>{
    const data = await fetch('https://backend-fpbe.onrender.com/api/list-properties');
    const json = await data.json();
    dispatch(getProperties(json));
  }
  useEffect(()=>{
    fetchData();
  },[]); 
  return (
    <Box  sx ={{mt:12}}>
      <Filter/>
      <CardContainer/>
    </Box>
  )
}

export default MainPage