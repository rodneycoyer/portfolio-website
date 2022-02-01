import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
        "Montserrat",
        "sans-serif"
      ].join(','),
    },
  palette: {
    mode: "dark",
  }
  });

export default theme;