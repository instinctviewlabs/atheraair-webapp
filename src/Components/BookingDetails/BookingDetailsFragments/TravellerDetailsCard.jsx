import { Avatar, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AnchorText, WhiteCard } from '../../../Lib/MuiThemes/MuiComponents'

function TravellerDetailsCard() {
  
  const { t } = useTranslation();
  return (
    <Stack flex={2}>
        <WhiteCard>
            <Stack spacing={2} height="100%">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant='h5'>Traveller Details</Typography>
                    <AnchorText variant='subtitle1'>{t("addTraveller")}</AnchorText>
                </Stack>
                {/* <Typography variant='h6'>3 Passengers</Typography> */}
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar />
                        <Typography>Adult (12+ years)</Typography>
                    </Stack>
                    <Stack>
                        <Typography>1/4 added</Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label={<Typography variant='body1' color="text.main">Mike Wheeler</Typography>} />
                        <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Will Byers</Typography>}/>
                        <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Dustin Henderson</Typography>}/>
                        <FormControlLabel control={<Checkbox />} label={<Typography variant='body1' color="text.main">Lucas Sinclair</Typography>}/>
                    </FormGroup>
                </Stack>
            </Stack>
        </WhiteCard>
    </Stack>
  )
}

export default TravellerDetailsCard