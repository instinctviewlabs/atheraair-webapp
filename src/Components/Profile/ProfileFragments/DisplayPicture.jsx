import React from 'react';
import { Badge, Box, IconButton, Typography } from '@mui/material';
import { AvatarProfile } from '../../../Lib/MuiThemes/MuiComponents';
import { HiPencil } from 'react-icons/hi';

function DisplayPicture() {
  return (
    <>
        
        <Box textAlign="center">
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<IconButton sx={{backgroundColor: "veryLightBlue.main", "&:hover" : { backgroundColor: "veryLightBlue.main"}}}><HiPencil/></IconButton>}
            >
                <AvatarProfile alt="Remy Sharp" src="https://www.bethesdaheadshots.com/wp-content/uploads/2021/06/JONATHAN_5022P_ppFIN.jpg"/>
            </Badge>
            <Typography variant="h5" color="text.main">John Doe</Typography>
            <Typography variant='body2'>johndoe@gmail.com</Typography>
        </Box>
    </>

  )
}

export default DisplayPicture