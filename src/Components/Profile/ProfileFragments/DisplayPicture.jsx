import React from 'react';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import { AvatarProfile } from '../../../Lib/MuiThemes/MuiComponents';
import { HiPencil } from 'react-icons/hi';
import { useSelector } from 'react-redux';

function DisplayPicture() {

  const {auth} = useSelector(data => data.persistedReducer);

  return (
    <>
        
        <Box textAlign="center">
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<IconButton sx={{backgroundColor: "veryLightBlue.main", "&:hover" : { backgroundColor: "veryLightBlue.main"}}}><HiPencil/></IconButton>}
            >
                <AvatarProfile alt="Remy Sharp" src={auth.photoUrl}/>
            </Badge>
            <Typography variant="h5" color="text.main">{auth.name}</Typography>
            <Typography variant='body2'>{auth.email}</Typography>
        </Box>
    </>

  )
}

export default DisplayPicture