import React from 'react'
import { Box, IconButton } from '@mui/material';
import MUIDataTable from "mui-datatables";
import { WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { MoreVert } from '@mui/icons-material';

function TripDetails() {
  const columns = [
    {
        name: "airlines_name",
        label: "Airlines name",
        options: {
          filter: false,
          filterType: "dropdown",
        //   setCellHeaderProps: () => ({ style: {textAlign: "center"}}),
        //   setCellProps: () => ({ style: {textAlign: "center"}})
        },
      },
      {
        name: "from",
        label: "From",
        options: {
          filter: false,
          filterType: "dropdown",
        //   setCellHeaderProps: () => ({ style: {textAlign: "center"}}),
        //   setCellProps: () => ({ style: {textAlign: "center"}})
        },
      },
      {
        name: "to",
        label: "To",
        options: {
          filter: false,
          filterType: "dropdown",
        },
      },
      {
        name: "departure_time",
        label: "Departure time",
        options: {
          filter: false,
          filterType: "dropdown",
        },
      },
      {
        name: "arrival_time",
        label: "Arrival time",
        options: {
          filter: false,
          filterType: "dropdown",
        },
      },
      {
        name: "journey_time",
        label: "Journey time",
        options: {
          filter: true,
          filterType: "dropdown",
        },
      },
      {
        name: "date",
        label: "Date",
        options: {
          filter: true,
          filterType: "dropdown",
        },
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: false,
          filterType: "dropdown",
        },
      },
      {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          download: false,
          customBodyRender: () => {
            return(
                <IconButton>
                    <MoreVert></MoreVert>
                </IconButton>
            )
          }
        },
      },
  ];
  const data = [
    {
        airlines_name: "Emirates",
        from: "Dubai",
        to: "Chennai",
        departure_time: "12:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        date: "20-02-2023",
        status: "upcoming"
    },
    {
        airlines_name: "Vistara",
        from: "Singapore",
        to: "Delhi",
        departure_time: "2:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        date: "23-02-2023",
        status: "completed"
    },
    {
        airlines_name: "Air India",
        from: "Mexico",
        to: "Mumbai",
        departure_time: "12:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        date: "19-02-2023",
        status: "cancelled"
    },
    {
        airlines_name: "Singapore Air",
        from: "Heathgrow",
        to: "Singapore",
        departure_time: "12:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        date: "28-02-2023",
        status: "cancelled"
    },
    {
        airlines_name: "Air Asia",
        from: "Thailand",
        to: "Bangkok",
        departure_time: "12:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        date: "01-02-2023",
        status: "completed"
    },
    {
        airlines_name: "Saudi Airlines",
        from: "Saudi Arabia",
        to: "Delhi",
        departure_time: "12:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        date: "20-02-2023",
        status: "upcoming"
    }
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    elevation: 0,
    selectableRows: "none",
    fixedHeader: true,
  };
  return(
    <Box sx={{
        height: "auto",
        width: "auto",
        backgroundColor: "common.background",
        py: 5
    }}>
        <MUIDataTable data={data} columns={columns} options={options} />
    </Box>
  )
}

export default TripDetails