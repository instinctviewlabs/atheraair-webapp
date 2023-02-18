import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BlueButton, InputField, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents';
import { Stack } from '@mui/material';

const style = {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  display: "flex",
  gap: "25px",
  flexDirection: "column"
};

export default function AddPassengerModal({open, setOpen}) {

  return (
    <Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          {/* <Box sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              px: 30,
              mt: 4,
              gap: 3,
            }}> */}
            <Box sx={style}>
                <Typography variant='h5'>Mandatory</Typography>
                <Stack direction="row" spacing={4}>
                    <InputField
                        fullWidth
                        name="name"
                        type="text"
                        variant='outlined'
                        label="Name"
                        size='medium'
                        // value={profileData.name}
                        // onChange={handleChanges}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    />
                    <InputField
                        fullWidth
                        name="email"
                        type="email" 
                        variant='outlined'
                        label="Email"
                        size='medium'
                        // value={profileData.email}
                        // onChange={handleChanges}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false , // <== added this to disable border line
                        // }}
                    />
                </Stack>
                <Stack direction="row" spacing={4}>
                <InputField
                        fullWidth
                        // select
                        name="gender"
                        type="text" 
                        variant='outlined'
                        label="Gender"
                        size='medium'
                        // value={profileData.gender}
                        // onChange={handleChanges}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    >
                        {/* <MenuList value="Male">Male</MenuList>
                        <MenuList value="Female">Female</MenuList>
                        <MenuList value="Unknown">Unknown</MenuList> */}
                    </InputField>
                    <InputField
                        fullWidth
                        name="dob"
                        type="text" 
                        variant='outlined'
                        label="Date of birth"
                        size='medium'
                        // onChange={handleChanges}
                        // value={profileData.dob}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    />
                </Stack>
                <Typography variant='h5'>Optional fields</Typography>
                <Stack direction="row" spacing={4}>
                <InputField
                        fullWidth
                        name="nationality"
                        type="text" 
                        variant='outlined'
                        label="Nationality"
                        size='medium'
                        // onChange={handleChanges}
                        // value={profileData.nationality}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    />
                    <InputField
                        fullWidth
                        name="passportNumber"
                        type="text" 
                        variant='outlined'
                        label="Passport number"
                        size='medium'
                        // onChange={handleChanges}
                        // value={profileData.passportNumber}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    />
                </Stack>
                <Stack direction="row" spacing={4}>
                    
                    <InputField
                        fullWidth
                        name="expiryDate"
                        type="text" 
                        variant='outlined'
                        label="Expiry date"
                        size='medium'
                        // onChange={handleChanges}
                        // value={profileData.expiryDate}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    />
                    <InputField
                        fullWidth
                        name="issuingCountry"
                        type="text" 
                        variant='outlined'
                        label="Passport issuing country"
                        size='medium'
                        // onChange={handleChanges}
                        // value={profileData.issuingCountry}
                        // InputProps={{
                        //     disableUnderline: !editable ? true : false, // <== added this to disable border line
                        // }}
                    />
                </Stack>
                <Stack>
                    <BlueButton size='large'>
                        Add passenger
                    </BlueButton>
                </Stack>
            </Box>
      </Modal>
    </Box>
  );
}