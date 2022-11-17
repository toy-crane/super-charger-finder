import { ReactNode } from "react"
import styled from "@emotion/styled"
import { Box } from "@mui/material"

interface Layout {
  children: ReactNode
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`

const Layout = ({ children }: Layout) => {
  return (
    <Root>
      <Box sx={{ backgroundColor: "background.default", flex: 1 }} width="100%">
        {children}
      </Box>
    </Root>
  )
}

export default Layout
