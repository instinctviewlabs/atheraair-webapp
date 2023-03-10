import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { BlackButton, BlackButtonOutlined, BlueButton } from '../../../Lib/MuiThemes/MuiComponents';
import { useNavigate } from 'react-router-dom';

export default function LoginToContinuePopup({open, setOpen}) {

  const navigate = useNavigate();

  return (
    <Dialog
        open={open}
        onClose={setOpen}
    >
    <DialogTitle>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack>
                <Typography variant="h5">Please Login to continue your booking with</Typography>
                <Typography variant="h5">Errances Voyages</Typography>
            </Stack>
            <IconButton onClick={() => setOpen(false)}>
                <Close></Close>
            </IconButton>
        </Stack>
    </DialogTitle>
    <DialogContent>
            <Typography variant='body1'>
                Hi, To continue your booking, you need login to your account, This only take few minutes.
                If you don't have an Errances Voyages account, Please Signup.
            </Typography>
    </DialogContent>
    <DialogActions>
        <BlueButton onClick={() => navigate("/login")} autoFocus>Login</BlueButton>
        <BlackButtonOutlined onClick={() => navigate("/signup")}>
            Signup
        </BlackButtonOutlined>
    </DialogActions>
    </Dialog>
  );
}