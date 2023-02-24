import React, { useEffect, useRef, useState } from 'react'
import { Box, Chip, IconButton, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import MUIDataTable from "mui-datatables";
import { ReuseMenu, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { AccountCircle, CurrencyExchange, Logout, MoneyOff, MoreVert, Payment, PriceCheck } from '@mui/icons-material';
import useMenu from '../../../Lib/CustomHooks/useMenu';
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext';
import axios from 'axios';
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig';
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar';

function UserDetails() {

  const {menu, openMenu, closeMenu} = useMenu();
  const [userDetailsData, setUserDetailsData] = useState([]);
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const [isDataFetchError, setDataFetchError] = useState(false);
  const { showSnackBar } = useSnackBar();

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
      name: "name",
      label: "Fullname",
      options: {
        filter: false,
        filterType: "dropdown",
        // setCellHeaderProps: () => ({ style: {width: "500px"}}),
        // setCellProps: () => ({ style: {textAlign: "center", width: "500px"}})
      },
    },
    {
      name: "email",
      label: "Email id",
      options: {
        filter: true,
        filterType: "dropdown",
      },
    },
    {
      name: "number",
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
        name: "passportNumber",
        label: "Passport number",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false,
        },
    },
    {
        name: "expiryDate",
        label: "Expiry date",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false,
        },
    },
    {
        name: "issuingCountry",
        label: "Issuing country",
        options: {
          filter: true,
          filterType: "dropdown",
          display: false
        },
    },
    {
        name: "status",
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


  useEffect(() => {
    const controller = axios.CancelToken.source();
      (async () => {
        try{
          startLoading();
          const response = await axios({
            method: "get",
            url: `${BASE_URL}/fetchAllUsers`,
            data: {},
            cancelToken: controller.token
          });
          if(response.status === 200){
            setUserDetailsData(response.data.data);
          }
        }catch(error){
          console.log(error)
          setDataFetchError(true)
          showSnackBar("error", "Unable to fetch user details")
        }finally{
          restLoading();
        }
      })();

    return () => {
      controller.cancel();
    }
  },[])

  const options = {
    textLabels: {
      body: {
        noMatch: isDataFetchError ? "Sorry, No Data available" : "fetching...",
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
          return setDataFetchError(true);
        }
      });
    }
  };

  return(
    <Box sx={{
        height: "auto",
        width: "auto",
        backgroundColor: "common.background",
        py: 5
    }}>
        <MUIDataTable data={userDetailsData} columns={columns} options={options} />
    </Box>
  )
}

export default UserDetails