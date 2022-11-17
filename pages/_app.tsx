import { css, Global } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import globalStyle from "./style/global-style"
import normalize from "./style/nomalize"
import theme from "./style/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          ${globalStyle}
        `}
      />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
