import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';

//Accordian
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FiltersSetting() {
  
  const [price, setPrice] = useState([100, 500]);
  const [time, setTime] = useState([]);
//   const [rating, setRating] = useState(5);

  return (
    <Box sx={{
        display: {
            xs: "none",
            sm: "block"
        },
        height: "auto",
        flex: 1,
        py: 1,
        px: 3
    }}>
        <Typography variant="h6" color="text.main">Filters</Typography>
        <Accordion elevation={0} sx={{bgcolor: "common.background"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' color="text.main">Price</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{py: 3}}>
            <Slider
                value={price}
                onChange={(e, newVal) => setPrice(newVal)}
                getAriaValueText={(val) => `$${val}`}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={100}
                max={1000}
            />
            </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} sx={{bgcolor: "common.background", borderTop: "1px solid #bdbdbd"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' color="text.main">Departure time</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{py: 3}}>
            <Slider
                value={time}
                onChange={(e, newVal) => setTime(newVal)}
                getAriaValueText={(val) => `$${val}`}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={100}
                max={1000}
            />
            </AccordionDetails>
        </Accordion>
        {/* <Accordion elevation={0} sx={{bgcolor: "common.background", borderTop: "1px solid #bdbdbd"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            >
            <Typography variant='body1'>Rating</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Rating
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }}
            />
            </AccordionDetails>
        </Accordion> */}
        <Accordion elevation={0} sx={{bgcolor: "common.background", borderTop: "1px solid #bdbdbd"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' sx={{color: "text.main"}}>Airlines</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant='body1' color="text.main">Emirates</Typography>} />
                <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Fly Dubai</Typography>}/>
                <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Qatar</Typography>}/>
                <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Etihad</Typography>}/>
            </FormGroup>
            </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} sx={{bgcolor: "common.background", borderTop: "1px solid #bdbdbd"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color: "text.main"}}/>}
            >
            <Typography variant='body1' color="text.main">Trips</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant='body1' color="text.main">Round trip</Typography>} />
                <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">One way</Typography>}/>
                <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Multi-City</Typography>}/>
            </FormGroup>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FiltersSetting