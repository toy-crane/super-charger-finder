import { css, Global } from "@emotion/react"
import { ThemeProvider } from "@mui/material/styles"
import type { AppProps } from "next/app"
import globalStyle from "../style/global-style"
import normalize from "../style/nomalize"
import theme from "../style/theme"
import { RecoilRoot } from "recoil"
import { Analytics } from "@vercel/analytics/react"

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
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
      <Analytics />
    </>
  )
}
