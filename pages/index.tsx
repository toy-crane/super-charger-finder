import React, { useState } from "react"

import { superChargerInfo } from "./data"
import { Box, Container, Stack, useTheme } from "@mui/material"
import ChargingStationCard from "./components/card"

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2} my={3}>
        {superChargerInfo.map((item) => (
          <ChargingStationCard {...item} key={item.name} />
        ))}
      </Stack>
    </Container>
  )
}
