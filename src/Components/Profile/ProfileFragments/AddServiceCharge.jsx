import React, { useEffect, useState } from 'react'
import { MoreVert } from '@mui/icons-material';
import { Box, IconButton, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import MUIDataTable from 'mui-datatables'
import useMenu from '../../../Lib/CustomHooks/useMenu';
import { AnchorText, BlackButtonOutlined, ReuseMenu } from '../../../Lib/MuiThemes/MuiComponents'
import AddServiceChargeModal from '../Modals/AddServiceChargeModal';
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar';
import axios from 'axios';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import useSwitch from '../../../Lib/CustomHooks/useSwitch';

function AddServiceCharge() {

  const {menu, openMenu, closeMenu} = useMenu();
  const [ServiceChargeModal, setServiceChargeModal] = useState(false);
  const [serviceChargesList, setServiceChargesList] = useState([]);
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [dataError, setDataError] = useSwitch();
  const { showSnackBar } = useSnackBar();

  const columns = [
    {
      name: "contryName",
      label: "Country name",
      options: {
        filter: false,
        filterType: "dropdown",
      //   setCellHeaderProps: () => ({ style: {textAlign: "center"}}),
        // setCellProps: () => ({ style: {textAlign: "center", maxWidth: "700px"}})
      },
    },
    {
      name: "serviceCharge",
      label: "Service charge",
      options: {
        filter: false,
        filterType: "dropdown",
        // setCellHeaderProps: () => ({ style: {width: "500px"}}),
        // setCellProps: () => ({ style: {textAlign: "center", width: "500px"}})
      },
    },
    {
      name: "currencyFormat",
      label: "Currency format",
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
      
    
  const options = {
    textLabels: {
      body: {
        noMatch: dataError ? "Sorry, No Data available" : "fetching...",
      }
    },
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    elevation: 0,
    selectableRows: "none",
    fixedHeader: true,
    customSearch: (searchQuery, currentRow, columns) => {
      currentRow.forEach(col => {
        if (col && col.toString().indexOf(searchQuery) >= 0) {
          return setDataError(true);
        }
      });
    }
  };

  useEffect(() => {
    const controller = axios.CancelToken.source();
      (async () => {
        try{
          startLoading();
          const response = await axios({
            method: "get",
            url: `${BASE_URL}/getServiceCharge`,
            data: {},
            cancelToken: controller.token
          });
          if(response.status === 200){
            setServiceChargesList(response.data);
          }
        }catch(error){
          console.log(error)
          if(!axios.isCancel(error)){
            setDataError(true)
            showSnackBar("error", "Unable to fetch user details")
          }
        }finally{
          restLoading();
        }
      })();

    return () => {
      controller.cancel();
    }
  },[])

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
          <BlackButtonOutlined onClick={() => setServiceChargeModal(true)}>Add</BlackButtonOutlined>
        </Box>
        <Box sx={{
            display: "flex", 
            flexDirection: "column",  
            gap: "15px"
        }}>
            <MUIDataTable data={serviceChargesList} columns={columns} options={options} />
        </Box>
    </Stack>
    <AddServiceChargeModal open={ServiceChargeModal} handleClose={setServiceChargeModal}></AddServiceChargeModal>
    </>
  )
}

export default AddServiceCharge