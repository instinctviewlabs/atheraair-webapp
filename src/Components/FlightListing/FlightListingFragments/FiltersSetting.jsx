import React, {useEffect, useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Checkbox, FormControlLabel, FormGroup, Slider, styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { BsCloudMoonFill, BsFillCloudSunFill, BsFillSunFill, BsFillSunriseFill } from "react-icons/bs"

//Accordian
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledToggleButton, StyledToggleButtonGroup, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';


function FiltersSetting({carriers, minMaxPrice}) {
    console.log(carriers);
  
  const [duration, setDuration] = useState(4);
  const [expanded, setExpanded] = useState(["panel1", "panel2", "panel3", "panel4", "panel5"]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterStops, setFilterStops] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterDuration, setFilterDuration] = useState("");
//   const [filterTrip, setFilterTrip] = useState("");
  const [filterAirlines, setFilterAirlines] = useState("");
  const [filterDepartureDate, setFilterDepartureDate] = useState("");
  const priceRange = [
    {
      value: minMaxPrice.minPrice,
      label: `$${minMaxPrice.minPrice}`,
    },
    {
      value: minMaxPrice.maxPrice,
      label: `$${minMaxPrice.maxPrice}`,
    },
  ];

  const durationRange = [
    {
      value: 4,
      label: '4h 0m',
    },
    {
      value: 45,
      label: '45h 0m',
    },
  ];


  const handleChange = (panel) => {
    if(expanded.includes(panel)){
        setExpanded(prevState => prevState.filter(data => data !== panel));
    }else{
        setExpanded(prevState => [...prevState, panel]);
    }
  };

  function handleStops(event){
    const {checked, value} = event.target;
    if(checked){
        setFilterStops(prevState => [...prevState, value]);
    }else{
        setFilterStops(prev => prev.filter(stop => stop !== value));
    }

  }

//   function handleTrip(event){
//     const {checked, value} = event.target;
//     if(checked){
//         setFilterTrip(prevState => [...prevState, value]);
//     }else{
//         setFilterTrip(prev => prev.filter(stop => stop !== value));
//     }

//   }

  function handleAirlines(event){
    const {checked, value} = event.target;
    if(checked){
        setFilterAirlines(prevState => [...prevState, value]);
    }else{
        setFilterAirlines(prev => prev.filter(stop => stop !== value));
    }

  }

  useEffect(() => {
    // setSearchParams({
    //     stops: filterStops,
    //     price: filterPrice,
    //     duration: filterDuration,
    //     airlines: filterAirlines
    // })
    searchParams.set("stops", filterStops);
    searchParams.set("price", filterPrice);
    searchParams.set("duration", filterDuration);
    searchParams.set("airlines", filterAirlines);
    setSearchParams(searchParams);

  }, [filterStops, filterPrice, filterDuration, filterAirlines])

  return (
    <Box sx={{
        display: {
            xs: "none",
            sm: "block"
        },
        height: "auto",
        flex: 1,
    }}>
        <WhiteCard>
        {/* <Typography variant="h6" color="text.main">Filters</Typography> */}
        <Accordion 
            elevation={0} 
            sx={{bgcolor: "card.background"}}
            expanded={expanded.includes("panel1")}
            onChange={() => handleChange("panel1")}
            >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' sx={{color: "text.main"}}>Flight stops</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <FormGroup>
                <FormControlLabel 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">Non-stop</Typography>}
                    value={0}
                    onChange={handleStops} 
                />
                <FormControlLabel 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">1 stop</Typography>}
                    value={1}
                    onChange={handleStops} 
                />
                <FormControlLabel 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">2 stop</Typography>}
                    value={2}
                    onChange={handleStops} 
                />
            </FormGroup>
            </AccordionDetails>
        </Accordion>
        <Accordion 
            elevation={0} 
            sx={{bgcolor: "card.background", borderTop: "1px solid #bdbdbd"}}
            expanded={expanded.includes("panel2")}
            onChange={() => handleChange("panel2")}
            >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
                >
            <Typography variant='body1' color="text.main">Price</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{py: 3}}>
            <Slider
                size="small"
                onChange={(e, newVal) => setFilterPrice(newVal)}
                value={Number(filterPrice)}
                getAriaValueText={(val) => `$${val}`}
                aria-label="small"
                step={10}
                valueLabelDisplay="on"
                marks={priceRange}
                min={minMaxPrice.minPrice}
                max={minMaxPrice.maxPrice}
            />
            </AccordionDetails>
        </Accordion>
        <Accordion 
            elevation={0} 
            sx={{bgcolor: "card.background", borderTop: "1px solid #bdbdbd"}}
            expanded={expanded.includes("panel3")}
            onChange={() => handleChange("panel3")}
        >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' color="text.main">Duration</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{py: 3}}>
            <Slider
                size="small"
                onChange={(e, newVal) => setFilterDuration(newVal)}
                value={Number(filterDuration)}
                // getAriaValueText={(val) => `$${val}`}
                aria-label="small"
                step={1}
                valueLabelDisplay="on"
                marks={durationRange}
                min={4}
                max={45}
            />
            {/* <Slider
                value={time}
                onChange={(e, newVal) => setTime(newVal)}
                getAriaValueText={(val) => `$${val}`}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={100}
                max={1000}
                /> */}
            </AccordionDetails>
        </Accordion>
        <Accordion 
            elevation={0} 
            sx={{bgcolor: "card.background", borderTop: "1px solid #bdbdbd"}}
            expanded={expanded.includes("panel4")}
            onChange={() => handleChange("panel4")}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
            <Typography variant='body1' color="text.main">Departure time</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <StyledToggleButtonGroup
                fullWidth
                color="primary"
                value={filterDepartureDate}
                exclusive
                onChange={(event, newValue) => setFilterDepartureDate(newValue)}
                >
                <StyledToggleButton value="before6">
                    <Box>
                        <BsFillSunriseFill/>
                    </Box>  
                    <Typography variant='subtitle1'>Before 6 AM</Typography>
                </StyledToggleButton>
                <StyledToggleButton value="6-12">
                    <Box>
                        <BsFillSunFill/>
                    </Box>
                    <Typography variant='subtitle1'>6 AM to 12 PM</Typography>
                </StyledToggleButton>
                <StyledToggleButton value="12-6">
                    <Box>
                        <BsFillCloudSunFill/>
                    </Box>
                    <Typography variant='subtitle1'>12 PM to 6 PM</Typography> 
                </StyledToggleButton>
                <StyledToggleButton value="after6">
                    <Box>
                        <BsCloudMoonFill/>
                    </Box>
                    <Typography variant='subtitle1'>After 6 PM</Typography>
                </StyledToggleButton>
            </StyledToggleButtonGroup>
            </AccordionDetails>
            </Accordion>
        {/* <Accordion 
            elevation={0} 
            sx={{bgcolor: "card.background", borderTop: "1px solid #bdbdbd"}}
            expanded={expanded.includes("panel4")}
            onChange={() => handleChange("panel4")}
            >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' color="text.main">Trips</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <FormGroup>
                <FormControlLabel
                    value="oneway" 
                    onChange={handleTrip}
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">One way</Typography>}
                />
                <FormControlLabel 
                    value="twoway"
                    onChange={handleTrip}
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">Round trip</Typography>} 
                />
                <FormControlLabel 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">My dates are flexible</Typography>}
                />
            </FormGroup>
            </AccordionDetails>
        </Accordion> */}
        <Accordion 
            elevation={0} 
            sx={{bgcolor: "card.background", borderTop: "1px solid #bdbdbd"}}
            expanded={expanded.includes("panel5")}
            onChange={() => handleChange("panel5")}
            >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' sx={{color: "text.main"}}>Airlines</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <FormGroup>
                {Object.values(carriers).map((carrier, index) => (

                    <FormControlLabel
                        key={index}
                        value={carrier}
                        onChange={handleAirlines} 
                        control={<Checkbox />} 
                        label={<Typography variant='body1' color="text.main">{carrier}</Typography>} 
                    />

                ))}
                {/* <FormControlLabel 
                    value="fly dubai"
                    onChange={handleAirlines} 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">Fly Dubai</Typography>}
                />
                <FormControlLabel 
                    value="qatar"
                    onChange={handleAirlines} 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">Qatar</Typography>}
                />
                <FormControlLabel 
                    value="ethihad"
                    onChange={handleAirlines} 
                    control={<Checkbox />} 
                    label={<Typography variant='body1' color="text.main">Etihad</Typography>}
                /> */}
            </FormGroup>
            </AccordionDetails>
        </Accordion>
        </WhiteCard>
    </Box>
  )
}

export default FiltersSetting