import { ReactNode } from "react"
import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { Container } from "@mui/system"

interface Layout {
  children: ReactNode
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

const Layout = ({ children }: Layout) => {
  return (
    <Root>
      <Box sx={{ flex: 1 }} width="100%">
        <Container maxWidth="sm">{children}</Container>
      </Box>
    </Root>
  )
}

export default Layout
