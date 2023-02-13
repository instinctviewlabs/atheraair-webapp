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
                        fullWidth
                        type="password"
                        variant='standard'
                        label="Password"
                        size='small'
                        value="123456789"
                        InputProps={{
                            disableUnderline: true, // <== added this to disable border line
                        }}
                    />
                </ListItem>
                <ListItem secondaryAction={<BlackButtonOutlined><AiFillEdit/> Change</BlackButtonOutlined>}>
                    <InputField
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
                        fullWidth
                        type="text" 
                        variant='standard'
                        label="Address"
                        size='small'
                        value="No.221, Baker st, London"
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