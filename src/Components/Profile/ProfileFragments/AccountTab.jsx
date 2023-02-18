import { Button, List, ListItem, MenuList, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig'
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext'
import useSwitch from '../../../Lib/CustomHooks/useSwitch'
import { BlackButtonOutlined, InputField, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import { setUserDetails } from '../../../Lib/Redux/AccountSlice'

function AccountTab() {

  /***************************States and Variables******************************/

  const {auth, account} = useSelector(data => data.persistedReducer);
  const dispatch = useDispatch();
  const userId = auth.userId;
  const [isLoading, startLoading, restLoading] = LoaderConsumer();

  const [editable, setEditable] = useSwitch();

  const [profileData, setProfileData] = useState({
      name: "",
      email: "",
      number: "",
      dob: "",
      gender: "",
      nationality: "",
      passportNumber: "",
      expiryDate: "",
      issuingCountry: ""
  });

//   console.log(profileData);

  useEffect(() => {
    setProfileData({
        name: account.name,
        email: account.email,
        number: account.number,
        dob: account.dob,
        gender: account.gender,
        nationality: account.nationality,
        passportNumber: account.passportNumber,
        expiryDate: account.expiryDate,
        issuingCountry: account.issuingCountry
    })
  }, [account]);
    
    /*********************Handling form changes**********************/

    function handleChanges(event){
      const {name, value} = event.target;
  
      setProfileData(prevState => ({
          ...prevState,
          [name] : value
      }))
    }

  /***********************API Call : Edit account method***************************/

  async function editAccount(){
    try{
        startLoading();
        console.log(profileData);
        const response = await axios.post(`${BASE_URL}/editAccount`, {
            userId,
            ...profileData
        })
        // console.log(response);
        if(response.status === 200){
            const getuser = await axios.post(`${BASE_URL}/getUser`,{userId});
            console.log(getuser);
            dispatch(setUserDetails(getuser.data))
        }
    }catch(error){
        console.log(error)
    }finally{
        restLoading()
    }
  }

  async function getUser(){
    try{
        startLoading();
        // console.log(response);
        const getuser = await axios.post(`${BASE_URL}/getUser`,{userId});
        console.log(getuser);
            // dispatch(setUserDetails(getuser.data))
    }catch(error){
        console.log(error)
    }finally{
        restLoading()
    }
  }


  return (
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography color="text.main" variant='h4'>Account</Typography>
            {!editable ? 
            <BlackButtonOutlined onClick={setEditable}><AiFillEdit/> Change</BlackButtonOutlined> : 
            <BlackButtonOutlined onClick={() => {
                setEditable()
                editAccount()
            }}>Save</BlackButtonOutlined>}
        </Stack>

        <WhiteCard>
            <List>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="name"
                        type="text"
                        variant='standard'
                        label="Name"
                        size='small'
                        value={profileData.name}
                        onChange={handleChanges}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="email"
                        type="email" 
                        variant='standard'
                        label="Email"
                        size='small'
                        value={profileData.email}
                        onChange={handleChanges}
                        InputProps={{
                            disableUnderline: !editable ? true : false , // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="number"
                        type="text" 
                        variant='standard'
                        label="Phone number"
                        size='small'
                        value={profileData.number}
                        onChange={handleChanges}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        // select
                        name="gender"
                        type="text" 
                        variant='standard'
                        label="Gender"
                        size='small'
                        value={profileData.gender}
                        onChange={handleChanges}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    >
                        {/* <MenuList value="Male">Male</MenuList>
                        <MenuList value="Female">Female</MenuList>
                        <MenuList value="Unknown">Unknown</MenuList> */}
                    </InputField>
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="dob"
                        type="text" 
                        variant='standard'
                        label="Date of birth"
                        size='small'
                        onChange={handleChanges}
                        value={profileData.dob}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="nationality"
                        type="text" 
                        variant='standard'
                        label="Nationality"
                        size='small'
                        onChange={handleChanges}
                        value={profileData.nationality}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="passportNumber"
                        type="text" 
                        variant='standard'
                        label="Passport number"
                        size='small'
                        onChange={handleChanges}
                        value={profileData.passportNumber}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="expiryDate"
                        type="text" 
                        variant='standard'
                        label="Expiry date"
                        size='small'
                        onChange={handleChanges}
                        value={profileData.expiryDate}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="issuingCountry"
                        type="text" 
                        variant='standard'
                        label="Passport issuing country"
                        size='small'
                        onChange={handleChanges}
                        value={profileData.issuingCountry}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    />
                </ListItem>
            </List>
        </WhiteCard>
    </Stack>
  )
}

export default AccountTab