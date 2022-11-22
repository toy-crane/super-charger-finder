import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      light: "#E82127",
      main: "#CC0000",
      dark: "#D3122D",
    },
    secondary: {
      light: "#3368ff",
      main: "#3e6ae1",
      dark: "#3457b1",
    },
    info: {
      light: "#a2a3a5",
      main: "#5c5e62",
      dark: "#393c41",
    },
    common: {
      white: "#FFFFFF",
      black: "#181B21",
    },
    background: {
      default: "#202124",
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            backgroundColor: "#dddddd",
          },
        },
      ],
    },
  },
})

export default theme
