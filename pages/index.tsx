import React from "react"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { superChargerInfo } from "./data"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { styled } from "@mui/material/styles"
import { Container, useTheme } from "@mui/material"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export default function Home() {
  const theme = useTheme()
  return (
    <Container maxWidth="sm">
      <Paper>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>명칭</StyledTableCell>
              <StyledTableCell>충전기 위치</StyledTableCell>
              <StyledTableCell>회차시간</StyledTableCell>
              <StyledTableCell>속도</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {superChargerInfo.map(
              ({ name, location, freeParkingChargeTime, chargingSpeed }) => (
                <TableRow
                  key={name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>
                  <TableCell>{location}</TableCell>
                  <TableCell>{freeParkingChargeTime}</TableCell>
                  <TableCell>{chargingSpeed}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}
