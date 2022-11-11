import React, { useState } from "react"

import { superChargerInfo } from "./data"
import { Container, Stack } from "@mui/material"
import ChargingStationCard from "./components/card"
import SearchInput from "./components/search-input"

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<number>()

  const handleSelectedStation = (id: number) => {
    setSelectedStation(id)
  }

  const searchedStations = selectedStation
    ? superChargerInfo.filter((station) => station.id === selectedStation)
    : superChargerInfo

  return (
    <Container maxWidth="sm">
      <SearchInput onInputChange={handleSelectedStation} />
      <Stack spacing={2} my={3}>
        {searchedStations.map((item) => (
          <ChargingStationCard {...item} key={item.name} />
        ))}
      </Stack>
    </Container>
  )
}
