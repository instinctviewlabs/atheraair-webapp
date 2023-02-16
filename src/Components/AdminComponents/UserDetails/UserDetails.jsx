import React from 'react'
import { Box, Chip, IconButton, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import MUIDataTable from "mui-datatables";
import { ReuseMenu, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { AccountCircle, CurrencyExchange, Logout, MoneyOff, MoreVert, Payment, PriceCheck } from '@mui/icons-material';
import useMenu from '../../../Lib/CustomHooks/useMenu';

function UserDetails() {

  const {menu, openMenu, closeMenu} = useMenu();

  const columns = [
    {
      name: "user_id",
      label: "User Id",
      options: {
        filter: false,
        filterType: "dropdown",
        display: false
      //   setCellHeaderProps: () => ({ style: {textAlign: "center"}}),
        // setCellProps: () => ({ style: {textAlign: "center", maxWidth: "700px"}})
      },
    },
    {
      name: "fullname",
      label: "Fullname",
      options: {
        filter: false,
        filterType: "dropdown",
        // setCellHeaderProps: () => ({ style: {width: "500px"}}),
        // setCellProps: () => ({ style: {textAlign: "center", width: "500px"}})
      },
    },
    {
      name: "email_id",
      label: "Email id",
      options: {
        filter: true,
        filterType: "dropdown",
      },
    },
    {
      name: "mobile_number",
      label: "Mobile no",
      options: {
        filter: true,
        filterType: "dropdown",
      },
    },
    {
        name: "dob",
        label: "Date of birth",
        options: {
          filter: true,
          filterType: "dropdown",
        },
    },
    {
        name: "gender",
        label: "Gender",
        options: {
          filter: true,
          filterType: "dropdown",
        },
    },
    {
        name: "nationality",
        label: "Nationality",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false
        },
    },
    {
        name: "passport_no",
        label: "Passport number",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false,
        },
    },
    {
        name: "expiry_date",
        label: "Expiry date",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false,
        },
    },
    {
        name: "issuing_country",
        label: "Issuing country",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false
        },
    },
    {
        name: "user_status",
        label: "User status",
        options: {
          filter: false,
          filterType: "dropdown",
          customBodyRender: params => <Chip size='small' color={params === "active" ? "primary" : "error"} label={params}/>
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
                        <ListItemText primary={<Typography variant='subtitle1'>Master passenger list</Typography>} />
                    </ListItemButton>
                    <ListItemButton onClick={closeMenu}>
                        <ListItemText primary={<Typography variant='subtitle1'>Deactivate / Activate user</Typography>} />
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
        fullname: "Joe Schmoe",
        email_id: "joe@gmail.com",
        mobile_number: "9876543210",
        dob: "12-12-1998",
        gender: "Male",
        nationality: "Indian",
        passport_no: "1234 565 656",
        expiry_date: "12-12-2027",
        issuing_country:  'India',
        user_status: "active"
    },
    {
        user_id: "12345",
        fullname: "Joe Schmoe",
        email_id: "joe@gmail.com",
        mobile_number: "9876543210",
        dob: "12-12-1998",
        gender: "Male",
        nationality: "Indian",
        passport_no: "1234 565 656",
        expiry_date: "12-12-2027",
        issuing_country:  'India',
        user_status: "active"

    },
    {
        user_id: "12345",
        fullname: "Joe Schmoe",
        email_id: "joe@gmail.com",
        mobile_number: "9876543210",
        dob: "12-12-1998",
        gender: "Male",
        nationality: "Indian",
        passport_no: "1234 565 656",
        expiry_date: "12-12-2027",
        issuing_country:  'India',
        user_status: "active"

    },
    {
        user_id: "12345",
        fullname: "Joe Schmoe",
        email_id: "joe@gmail.com",
        mobile_number: "9876543210",
        dob: "12-12-1998",
        gender: "Male",
        nationality: "Indian",
        passport_no: "1234 565 656",
        expiry_date: "12-12-2027",
        issuing_country:  'India',
        user_status: "inactive"

    },
    {
        user_id: "12345",
        fullname: "Joe Schmoe",
        email_id: "joe@gmail.com",
        mobile_number: "9876543210",
        dob: "12-12-1998",
        gender: "Male",
        nationality: "Indian",
        passport_no: "1234 565 656",
        expiry_date: "12-12-2027",
        issuing_country:  'India',
        user_status: "inactive"

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

export default UserDetails