import React from 'react'
import { Box, Chip, IconButton, ListItemButton, ListItemText, Tooltip, Typography } from '@mui/material';
import MUIDataTable from "mui-datatables";
import { ReuseMenu, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { CurrencyExchange, MoneyOff, MoreVert, PriceCheck } from '@mui/icons-material';
import useMenu from '../../../Lib/CustomHooks/useMenu';

function TripDetails() {

  const {menu, openMenu, closeMenu} = useMenu();

  const columns = [
    {
      name: "user_id",
      label: "User Id",
      options: {
        filter: false,
        filterType: "dropdown",
      //   setCellHeaderProps: () => ({ style: {textAlign: "center"}}),
        // setCellProps: () => ({ style: {textAlign: "center", maxWidth: "700px"}})
      },
    },
    {
      name: "date_of_booking",
      label: "Date of booking",
      options: {
        filter: false,
        filterType: "dropdown",
        // setCellHeaderProps: () => ({ style: {width: "500px"}}),
        // setCellProps: () => ({ style: {textAlign: "center", width: "500px"}})
      },
    },
    {
      name: "ticket_no",
      label: "Ticket no",
      options: {
        filter: true,
        filterType: "dropdown",
      },
    },
    {
      name: "pnr",
      label: "PNR",
      options: {
        filter: true,
        filterType: "dropdown",
      },
    },
    {
      name: "booked_by",
      label: "Booked by",
      options: {
        filter: true,
        filterType: "dropdown",
      },
    },
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
        name: "date_of_journey",
        label: "Date of journey",
        options: {
          filter: true,
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
        name: "payment_status",
        label: "Payment status",
        options: {
          filter: false,
          filterType: "dropdown",
          customBodyRender: params => {
            return params === "paid" ? (
              <Tooltip title={params} placement="right">
                <IconButton color='success'>
                  <PriceCheck />
                </IconButton>
              </Tooltip>
            ) : params === "pending" ? (
              <Tooltip title={params} placement="right">          
                <IconButton color="warning">
                  <CurrencyExchange />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title={params} placement="right">
                <IconButton color='error'>
                  <MoneyOff />
                </IconButton>
              </Tooltip>
            )
          }

        },
      },
      {
        name: "trip_status",
        label: "Trip status",
        options: {
          filter: false,
          filterType: "dropdown",
          customBodyRender: params => <Chip size='small' color={params === "upcoming" ? "primary" : params === "completed" ? "success" : "error"} label={params}/>
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
              <>
                <IconButton onClick={openMenu}>
                    <MoreVert></MoreVert>
                </IconButton>
                <ReuseMenu menu={menu} closeMenu={closeMenu}>
                <ListItemButton onClick={closeMenu}>
                    <ListItemText primary={<Typography variant='subtitle1'>View / Print ticket</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={closeMenu}>
                    <ListItemText primary={<Typography variant='subtitle1'>Cancel ticket</Typography>} />
                </ListItemButton>
                </ReuseMenu>
              </>
            )
          }
        },
      },
  ];
  const data = [
    {
        user_id: "12345",
        date_of_booking: "23-02-2023",
        date_of_journey: "28-02-2023",
        ticket_no: "jhsjdf565313dsd",
        pnr: "fvsfvf35v351",
        booked_by: "Joe schmoe",
        airlines_name: "Emirates",
        from: "Dubai",
        to: "Chennai",
        departure_time: "12:00am",
        arrival_time: "3:00pm",
        journey_time: "2h20m",
        payment_status: "pending",
        trip_status: "upcoming"
    },
    {
      user_id: "12345",
      date_of_booking: "23-02-2023",
      date_of_journey: "28-02-2023",
      ticket_no: "jhsjdf565313dsd",
      pnr: "fvsfvf35v351",
      booked_by: "Joe schmoe",
      airlines_name: "Emirates",
      from: "Dubai",
      to: "Chennai",
      departure_time: "12:00am",
      arrival_time: "3:00pm",
      journey_time: "2h20m",
      payment_status: "cancelled",
      trip_status: "completed"
  },
  {
    user_id: "12345",
    date_of_booking: "23-02-2023",
    date_of_journey: "28-02-2023",
    ticket_no: "jhsjdf565313dsd",
    pnr: "fvsfvf35v351",
    booked_by: "Joe schmoe",
    airlines_name: "Emirates",
    from: "Dubai",
    to: "Chennai",
    departure_time: "12:00am",
    arrival_time: "3:00pm",
    journey_time: "2h20m",
    payment_status: "paid",
    trip_status: "cancelled"
  },
  {
    user_id: "12345",
    date_of_booking: "23-02-2023",
    date_of_journey: "28-02-2023",
    ticket_no: "jhsjdf565313dsd",
    pnr: "fvsfvf35v351",
    booked_by: "Joe schmoe",
    airlines_name: "Emirates",
    from: "Dubai",
    to: "Chennai",
    departure_time: "12:00am",
    arrival_time: "3:00pm",
    journey_time: "2h20m",
    payment_status: "cancelled",
    trip_status: "upcoming"
  },
  {
    user_id: "12345",
    date_of_booking: "23-02-2023",
    date_of_journey: "28-02-2023",
    ticket_no: "jhsjdf565313dsd",
    pnr: "fvsfvf35v351",
    booked_by: "Joe schmoe",
    airlines_name: "Emirates",
    from: "Dubai",
    to: "Chennai",
    departure_time: "12:00am",
    arrival_time: "3:00pm",
    journey_time: "2h20m",
    payment_status: "paid",
    trip_status: "cancelled"
  },
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