import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, Box, IconButton, MenuItem, Typography } from '@mui/material';
import { BlueButton, InputField } from '../../Lib/MuiThemes/MuiComponents';
// import { countries } from '../../Lib/Countries/countries';
import countries from "../../Lib/utils/all-countries-db/all-countries-db.json";
import useLanguageConsumer from '../../Lib/CustomHooks/useLanguageConsumer';
import { Close } from '@mui/icons-material';
import { Stack } from '@mui/system';

export default function SelectCountryDialog({open, setOpen}) {

    const [value, setValue] = React.useState("");
    const {country, setCountry} = useLanguageConsumer();

  return (
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>
          <Typography variant='h4'>Choose your country below</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close></Close>
            </IconButton>
          </Stack>
        <DialogContent>
          <Box>
            <InputField
              sx={{width: 400}}
              select
              fullWidth
              label="Select country"
              value={value}
              onChange={(e, newVal) => setValue(e.target.value)}
              // helperText="Please select your country"
            >
              <MenuItem value="">Select country</MenuItem>
              {countries.map((option, i) => (
                <MenuItem key={i} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </InputField>
          </Box>
        </DialogContent>
        <DialogActions>
            <BlueButton onClick={() => {
                setCountry(value);
                setOpen(false)
            }} autoFocus>
            Apply
          </BlueButton>
        </DialogActions>
      </Dialog>
  );
}