import { createTheme } from "@mui/material"

export const LightTheme = createTheme({
    palette: {
      common: {
        background: "#FAFAFA"   //whitesmoke
        //containes common black and white color too
      },
      card: {
        background: "#fff"  //white
      },
      primary: {
        main: "#2E3191",
      },
      veryLightBlue: {
        main: "rgb(184, 218, 255)"      //Need this light blue in few place
      },
      text: {
        main: "#000",
        light: "gray",
        // secondary color : gray
        white: "#fff", //optional, may need this in some components
        black: "#000"
      }
    },
    typography: {
      fontFamily: "'Montserrat', 'sans-serif'",
      h4: {
        fontWeight: 500,
        fontSize: "20px"
      },
      h5: {
        fontWeight: 500,
        fontSize: "18px"
      },
      h6: {
        fontWeight: 500,
        fontSize: "16px"
      },
      body1: {
        fontWeight: 500,
        fontSize: "14px"
      },
      body2: {
        fontWeight: 500,
        fontSize: "14px",
        color: "gray"
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: "12px"
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: "12px",
        color: "gray"
      },
      button: {
        textTransform: "capitalize"
      }
    }
})