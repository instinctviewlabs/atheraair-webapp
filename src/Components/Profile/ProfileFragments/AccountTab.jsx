import { List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { BlackButtonOutlined, InputField, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function AccountTab() {

  const {auth} = useSelector(data => data.persistedReducer);

  return (
    <Stack width={{xs: "100%", md: "80%"}} spacing={2}>
        <Typography color="text.main" variant='h4'>Account</Typography>
        <WhiteCard>
            <List>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth 
                        type="text"
                        variant='standard'
                        label="Name"
                        size='small'
                        value={auth.name}
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="email" 
                        variant='standard'
                        label="Email"
                        size='small'
                        value={auth.email}
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Phone number"
                        size='small'
                        value="+1 123 456 789"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Gender"
                        size='small'
                        value="Male"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Date of birth"
                        size='small'
                        value="28 November, 1990"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Nationality"
                        size='small'
                        value="Indian"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Passport number"
                        size='small'
                        value="123456789"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Expiry date"
                        size='small'
                        value="27-02-2027"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
                        disabled
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Passport issuing country"
                        size='small'
                        value="India"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
            </List>
        </WhiteCard>
    </Stack>
  )
}

export default AccountTab