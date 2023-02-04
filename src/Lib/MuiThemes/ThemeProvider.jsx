import React from 'react';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';
import { useState } from 'react';

function CustomThemeProvider(props) {

  const [mode] = useState("light");
  
  return (
    <ThemeProvider theme={mode === "dark" ? DarkTheme : LightTheme}>
      {props.children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider; 