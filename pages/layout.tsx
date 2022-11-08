import { ReactNode } from "react"
import styled from "@emotion/styled"

interface Layout {
	children: ReactNode
}

const Root = styled.div`
	display: flex;
	justify-content: center;
`

export const Page = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	@media (min-width: 1080px) {
		max-width: 650px;
	}
`

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 auto;
`

const Layout = ({ children }: Layout) => {
	return (
		<Root>
			<Page>
				<Main>{children}</Main>
			</Page>
		</Root>
	)
}

export default Layout
