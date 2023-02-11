import React from 'react';
import { Box, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { normalLogo } from '../../Assests/assets';
import {VscEye, VscEyeClosed} from "react-icons/vsc";
import { BlueButton, TitleLogo } from '../../Lib/MuiThemes/MuiComponents';
import { usePasswordVisibility } from '../../Lib/CustomHooks/usePasswordVisibility';
import SideCarousel from './SideCarousel';

function SetPassword() {
 
  const [hidePassword, setHidePassword] = usePasswordVisibility();
  const [hideConfirmPassword, setHideConfirmPassword] = usePasswordVisibility();

  return (
    <Stack 
        direction="row" 
        height="99vh" 
        justifyContent="center"
        gap={10}
    >
        <SideCarousel></SideCarousel>   
        <Stack 
            p={5} 
            flexDirection="column"
            gap={5}
        >
            <TitleLogo></TitleLogo>
            <Stack spacing={3} direction="column" width={{xs: 350, sm: 550}}>
                <Box>
                    <Typography variant='h4'>Set a Password</Typography>
                    <Typography variant='subtitle2'>Your previous password has been reseted. Please set a new password for your account</Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    size='small'
                    label="Create password"
                    type={hidePassword ? 'password' : 'text'}
                    edge="end"
                    // value={values.password}
                    // onChange={handleChange('password')}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{hidePassword ? 
                            <IconButton onClick={() => setHidePassword(false)}>
                            <VscEyeClosed/>
                            </IconButton> : 
                            <IconButton onClick={() => setHidePassword(true)}>
                            <VscEye/>
                            </IconButton>
                        }
                        </InputAdornment>,
                    }}
                />
                <TextField
                    fullWidth
                    required
                    size='small'
                    label="Re-enter password"
                    type={hideConfirmPassword ? 'password' : 'text'}
                    edge="end"
                    // value={values.password}
                    // onChange={handleChange('password')}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{hideConfirmPassword ? 
                            <IconButton onClick={() => setHideConfirmPassword(false)}>
                            <VscEyeClosed/>
                            </IconButton> : 
                            <IconButton onClick={() => setHideConfirmPassword(true)}>
                            <VscEye/>
                            </IconButton>
                        }
                        </InputAdornment>,
                    }}
                />
                <BlueButton>Set password</BlueButton>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default SetPassword