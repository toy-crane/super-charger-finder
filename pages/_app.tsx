import { css, Global } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import globalStyle from "../style/global-style"
import normalize from "../style/nomalize"
import theme from "../style/theme"
import { RecoilRoot } from "recoil"

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
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}
