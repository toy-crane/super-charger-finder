import { css, Global } from "@emotion/react"
import type { AppProps } from "next/app"
import Layout from "./layout"
import globalStyle from "./style/global-style"
import normalize from "./style/nomalize"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Global
				styles={css`
					${normalize}
					${globalStyle}
				`}
			/>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
