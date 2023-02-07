import React from 'react';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';
import { useSelector } from 'react-redux';

function CustomThemeProvider(props) {

  const {theme} = useSelector(data => data);
  
  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
      {props.children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider; 