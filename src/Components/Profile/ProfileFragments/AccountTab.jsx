import { Button, List, ListItem, MenuList, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../Lib/Axios/AxiosConfig'
import { LoaderConsumer } from '../../../Lib/Contexts/LoaderContext'
import useSnackBar from '../../../Lib/CustomHooks/useSnackBar'
import useSwitch from '../../../Lib/CustomHooks/useSwitch'
import { BlackButtonOutlined, InputField, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'
import { setUserDetails } from '../../../Lib/Redux/AccountSlice'

function AccountTab() {

  /***************************States and Variables******************************/

  const {auth, account} = useSelector(data => data.persistedReducer);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userId = auth.userId;
  const [isLoading, startLoading, restLoading] = LoaderConsumer();
  const {showSnackBar} = useSnackBar();
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
  const [isDataValidated, setDataValidated] = useState({name: false, number: false, dob: false, nationality: false, passportNumber: false, expiryDate: false, issuingCountry: false})

//   console.log(profileData);

  useEffect(() => {
    setProfileData({
        name: account.name,
        email: account.email,
        number: account.number,
        dob: account.dob,
        gender: account.gender ?? "Unknown",
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

  /****************************Data validations******************************/
  const handleDataValidation = () => {

    let isValidated = true;

    if(profileData.name.length > 50 || profileData.name.length === 0){
        setDataValidated(prev => ({...prev, name: true}))
        isValidated = false;
    }

    // if(profileData.email.length === 0 || !/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(signupData.email)){
    //     setDataValidated(prev => ({...prev, email: true}))
    //     isValidated = false;
    // }

    if(profileData.number.length !== 10){
        setDataValidated(prev => ({...prev, number: true}))
        isValidated = false;
    }

    if(profileData.dob.length === 0){
        setDataValidated(prev => ({...prev, dob: true}))
        isValidated = false;
    }

    if(profileData.nationality.length === 0){
        setDataValidated(prev => ({...prev, nationality: true}))
        isValidated = false;
    }

    if(profileData.passportNumber.length === 0){
        setDataValidated(prev => ({...prev, passportNumber: true}))
        isValidated = false;
    }

    if(profileData.expiryDate.length === 0){
        setDataValidated(prev => ({...prev, expiryDate: true}))
        isValidated = false;
    }

    if(profileData.issuingCountry.length === 0){
        setDataValidated(prev => ({...prev, issuingCountry: true}))
        isValidated = false;
    }

    
    return isValidated;
  }
  /***********************API Call : Edit account method***************************/

  async function editAccount(){
    if(!handleDataValidation()){
        return showSnackBar("error", "Please fill the required fields")
    }
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

//   async function getUser(){
//     try{
//         startLoading();
//         // console.log(response);
//         const getuser = await axios.post(`${BASE_URL}/getUser`,{userId});
//         console.log(getuser);
//             // dispatch(setUserDetails(getuser.data))
//     }catch(error){
//         console.log(error)
//     }finally{
//         restLoading()
//     }
//   }

  return (
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography color="text.main" variant='h4'>{t("account")}</Typography>
            {!editable ? 
            <BlackButtonOutlined onClick={setEditable}><AiFillEdit/> {t("change")}</BlackButtonOutlined> : 
            <BlackButtonOutlined onClick={() => {
                setEditable()
                editAccount()
            }}>{t("save")}</BlackButtonOutlined>}
        </Stack>

        <WhiteCard>
            <List>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={true}
                        name="email"
                        type="email" 
                        variant='standard'
                        label={t("email")}
                        size='small'
                        value={profileData.email}
                        InputProps={{
                            disableUnderline: true , // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="name"
                        type="text"
                        variant='standard'
                        label={t("name")}
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
                        name="number"
                        type="text" 
                        variant='standard'
                        label={t("phoneNumber")}
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
                        select
                        name="gender"
                        type="text" 
                        variant='standard'
                        label={t("gender")}
                        size='small'
                        value={profileData.gender}
                        onChange={handleChanges}
                        InputProps={{
                            disableUnderline: !editable ? true : false, // <== added this to disable border line
                        }}
                    >
                        <MenuList value="Unknown">Unknown</MenuList>
                        <MenuList value="Male">Male</MenuList>
                        <MenuList value="Female">Female</MenuList>
                    </InputField>
                </ListItem>
                <ListItem>
                    <InputField
                        fullWidth
                        disabled={!editable}
                        name="dob"
                        type="text" 
                        variant='standard'
                        label={t("dateOfBirth")}
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
                        label={t("nationality")}
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
                        label={t("passportNumber")}
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
                        label={t("expiryDate")}
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
                        label={t("passportIssuingCountry")}
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