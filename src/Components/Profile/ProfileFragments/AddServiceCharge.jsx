import { MoreVert } from '@mui/icons-material';
import { Box, IconButton, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import React from 'react'
import useMenu from '../../../Lib/CustomHooks/useMenu';
import { AnchorText, BlackButtonOutlined, ReuseMenu } from '../../../Lib/MuiThemes/MuiComponents'

function AddServiceCharge() {

    const {menu, openMenu, closeMenu} = useMenu();
    const columns = [
        {
          name: "countryName",
          label: "Country name",
          options: {
            filter: false,
            filterType: "dropdown",
          //   setCellHeaderProps: () => ({ style: {textAlign: "center"}}),
            // setCellProps: () => ({ style: {textAlign: "center", maxWidth: "700px"}})
          },
        },
        {
          name: "amount",
          label: "Amount",
          options: {
            filter: false,
            filterType: "dropdown",
            // setCellHeaderProps: () => ({ style: {width: "500px"}}),
            // setCellProps: () => ({ style: {textAlign: "center", width: "500px"}})
          },
        },
        {
          name: "currency",
          label: "Currency",
          options: {
            filter: true,
            filterType: "dropdown",
          },
        },
        {
          name: "dateOfCreation",
          label: "Date of creation",
          options: {
            filter: true,
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
                <>
                <IconButton onClick={openMenu}>
                    <MoreVert></MoreVert>
                </IconButton>
                <ReuseMenu menu={menu} closeMenu={closeMenu}>
                <ListItemButton onClick={closeMenu}>
                    <ListItemText primary={<Typography variant='subtitle1'>Edit</Typography>} />
                </ListItemButton>
                <ListItemButton onClick={closeMenu}>
                    <ListItemText primary={<Typography variant='subtitle1'>Delete</Typography>} />
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
            countryName: "India",
            amount: "40",
            currency: "INR",
            dateOfCreation: "20-02-2023"
        },
        {
            countryName: "Africa",
            amount: "100",
            currency: "EUR",
            dateOfCreation: "20-02-2023"
        },
    ]
    
    const options = {
        
        filterType: "dropdown",
        responsive: "standard",
        elevation: 0,
        selectableRows: "none",
        fixedHeader: true,
    };
  return (
    <>
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Box 
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography color="text.main" variant='h4'>Configure service charge</Typography>
          <BlackButtonOutlined>Add</BlackButtonOutlined>
        </Box>
        <Box sx={{
            display: "flex", 
            flexDirection: "column",  
            gap: "15px"
        }}>
            <MUIDataTable data={data} columns={columns} options={options} />
        </Box>
    </Stack>
    </>
  )
}

export default AddServiceCharge