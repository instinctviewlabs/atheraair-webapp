import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, MenuItem, Modal, Slide, Stack, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { usePasswordVisibility } from '../../../Lib/CustomHooks/usePasswordVisibility';
import { BlueButton, InputField } from '../../../Lib/MuiThemes/MuiComponents';

function AddNewPaymentCard({open, handleClose}) {

  const [hideCvc, setHideCvc] = usePasswordVisibility();
  const [date, setDate] = useState(new Date());

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
                    <Typography variant='h4'>Add new card</Typography>
                </Box>
                <InputField
                    fullWidth
                    size='medium'
                    type="text"
                    label="Card Number"
                    required
                />

                <Box sx={{
                    display: "flex",
                    flexDirection: {xs: "column", sm: "row"},
                    justifyContent: "space-between",
                    gap: "20px"
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            views={['year', 'month']}
                            label="Exp. Date"
                            disablePast
                            // minDate={dayjs('2012-03-01')}
                            // maxDate={dayjs('2023-06-01')}
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <InputField {...params} fullWidth size="medium" />}
                        />
                    </LocalizationProvider>

                    <InputField
                        fullWidth
                        required
                        size='medium'
                        label="CVC"
                        type={hideCvc ? 'password' : 'text'}
                        edge="end"

                        // value={values.password}
                        // onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{hideCvc ? 
                                <IconButton onClick={() => setHideCvc(false)}>
                                <VscEyeClosed/>
                                </IconButton> : 
                                <IconButton onClick={() => setHideCvc(true)}>
                                <VscEye/>
                                </IconButton>
                            }
                            </InputAdornment>,
                        }}
                    />
                </Box>
                <InputField
                    fullWidth
                    size='medium'
                    type="text"
                    label="Name on Card"
                    required

                />

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
                <Box 
                    display="flex" 
                    flexDirection="row" 
                    alignItems="center"
                >
                    <Checkbox aria-label='save-my-card'/>
                    <Typography>Securely save my information for 1-click checkout</Typography>
                </Box>
                <BlueButton>Add this card</BlueButton>
            </Stack>
    </Modal>
  )
}

export default AddNewPaymentCard