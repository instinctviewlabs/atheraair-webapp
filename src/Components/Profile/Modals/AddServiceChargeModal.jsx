import { Box, Button, Checkbox,  IconButton, InputAdornment, MenuItem, Modal, Slide, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { FormattedNumber } from 'react-intl';
import { usePasswordVisibility } from '../../../Lib/CustomHooks/usePasswordVisibility';
import { BlueButton, InputField } from '../../../Lib/MuiThemes/MuiComponents';

function AddServiceChargeModal({open, handleClose}) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'card.background',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };
      
  return (
    <Modal
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
            <Stack sx={style} spacing={2} direction="column" width={{xs: 350, sm: 550}}>
                <Box>
                    <Typography variant='h4'>Add service charge</Typography>
                </Box>

                <InputField
                    select
                    fullWidth
                    size='medium'
                    type="text"
                    label="Country or Region"
                    required
                    value={"India"}
                >
                    <MenuItem value="America">America</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                </InputField>
                <InputField
                    select
                    fullWidth
                    size='medium'
                    type="text"
                    label="Currency"
                    required
                    value={"INR"}
                >
                    <MenuItem value="USD">US Dollar</MenuItem>
                    <MenuItem value="INR">Indian Rupee</MenuItem>
                </InputField>

                <InputField
                    fullWidth
                    size='medium'
                    type="text"
                    label="Service charge"
                    value={200}
                    required
                />
                <Stack direction="row" spacing={3} justifyContent="space-between">
                    <Button fullWidth variant="outlined" color='primary'>Cancel</Button>
                    <BlueButton fullWidth>Add this card</BlueButton>
                </Stack>
            </Stack>
    </Modal>
  )
}

export default AddServiceChargeModal