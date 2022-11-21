import { Children, ReactNode, isValidElement } from "react"
import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { Container } from "@mui/system"

interface Layout {
  children: ReactNode
}

interface HeaderProps {
  children?: ReactNode
}

interface MainProps {
  children?: ReactNode
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

const getElement = (children: React.ReactNode, nodeType: any) => {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === nodeType
  )
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "white",
        borderBottom: "thin solid #E7EBF0",
        backdropFilter: "blur(20px)",
      }}
    >
      {children}
    </Box>
  )
}

const Main = ({ children }: MainProps) => {
  return (
    <Box sx={{ flex: 1 }} width="100%">
      <Container maxWidth="sm">{children}</Container>
    </Box>
  )
}

const HeaderType = (<Header />).type
const MainType = (<Main />).type

const Layout = ({ children }: Layout) => {
  const header = getElement(children, HeaderType)
  const main = getElement(children, MainType)
  return (
    <Root>
      {header}
      {main}
    </Root>
  )
}

export default Object.assign(Layout, { Header, Main })
