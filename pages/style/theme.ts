import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      light: "#E82127",
      main: "#CC0000",
      dark: "#D3122D",
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
