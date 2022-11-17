import React, { useState } from "react"

import { Stack } from "@mui/material"
import ChargingStationCard from "../components/card"
import SearchInput from "../components/search-input"
import { superChargerInfo } from "../data"

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<number>()

  const handleSelectedStation = (id: number | undefined) => {
    setSelectedStation(id)
  }

  const searchedStations = selectedStation
    ? superChargerInfo.filter((station) => station.id === selectedStation)
    : superChargerInfo

  return (
    <>
      <SearchInput onInputChange={handleSelectedStation} />
      <Stack spacing={2} my={3}>
        {searchedStations.map((item) => (
          <ChargingStationCard {...item} key={item.name} />
        ))}
      </Stack>
    </>
  )
}
