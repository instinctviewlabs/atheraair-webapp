import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FiltersSetting from './FlightListingFragments/FiltersSetting';
import FlightListings from './FlightListingFragments/FlightListings';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { LoaderConsumer } from '../../Lib/Contexts/LoaderContext';
import { Axios } from '../../Lib/Axios/AxiosConfig';
import FromToCard from './FlightListingFragments/FromToCard';
import SearchFlightBox from '../ReusableComponents/SearchFlightBox';
import { useSearchParams } from 'react-router-dom';

function FlightListingsLayout() {

  const {flightSearchKey} = useSelector(data => data.persistedReducer);
  const [flightResult, setFlightResult] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [minMaxPrice, setMinMaxPrice] = useState({});
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // const effectRef = useRef();
  // console.log(flightSearchKey);
  // console.log(flightResult);


  useEffect(() => {
    const controller = axios.CancelToken.source();
    (async () => {
      try{
          startLoading();
          const response = await Axios({
            url: `${flightSearchKey.trip}?origin=${flightSearchKey.origin}&destination=${flightSearchKey.desination}&departureDate=${flightSearchKey.departureDate}${flightSearchKey.trip === "twoway" ? `&returnDate=${flightSearchKey.returnDate}` : ""}&adults=${flightSearchKey.adultCount}&children=${flightSearchKey.childrenCount}&infants=${flightSearchKey.infantCount}&travelClass=${flightSearchKey.class}`,
            method: "get",
            cancelToken: controller.token
          });
          console.log(response);

          if(response.status === 200){
            setFlightResult(response.data.data);
            setCarriers(response.data.carriers);
            setMinMaxPrice({minPrice: response.data.minPrice, maxPrice: response.data.maxPrice})
          }
    
      }catch(error){
        console.error(error)
      }finally{
        restLoading();
      }
    })()

    return () => {
      controller.cancel();
    }
  },[flightSearchKey]);

  // console.log(flightResult);
  // function filteredList(lists){

  //   const filterObj = {
  //     stops: !!searchParams.get("stops") && searchParams.get("stops").split(","),
  //     price: !!searchParams.get("price") && searchParams.get("price"),
  //     duration: !!searchParams.get("duration") && searchParams.get("duration"),
  //     airlines: !!searchParams.get("airlines") && searchParams.get("airlines").split(",")
  //   }
    
  //   if(filterObj.stops || filterObj.price || filterObj.duration || filterObj.airlines){
  //     return lists.filter(data => filterObj.stops.includes(data.stops.toString()))
  //   }

  //   return lists;
  // }

  // useEffect(() => {
  //   console.log(filteredList(flightResult));
  //   setFlightResult(filteredList(flightResult));
  // }, [searchParams]) 
  
  return (
    <>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
      backgroundColor: "common.background",
      px: {
        xs: 1,
        sm: 10
      },
      py: 3
    }}>
      <SearchFlightBox px={0} top={0}></SearchFlightBox>
      <Box sx={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          gap: 5,
          backgroundColor: "common.background",
      }}>
          <FiltersSetting 
            carriers={carriers} 
            minMaxPrice={minMaxPrice} 
          />
          <FlightListings 
            cardData={flightResult}
          />
      </Box>
    </Box>
    
    </>
  )
}

export default FlightListingsLayout