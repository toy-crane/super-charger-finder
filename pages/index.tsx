import React, { useState } from "react"

import { Dialog, Stack } from "@mui/material"
import ChargingStationCard from "../components/card"
import SearchInput from "../components/search-input"
import { superChargerInfo } from "../data"
import StationDetailCard from "../components/station-detail-card"

export default function Home() {
  const [selectedStationId, setSelectedStationId] = useState<number>()
  const [searchedStationId, setSearchedStationId] = useState<number>()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSelectedStation = (id: number | undefined) => {
    setSelectedStationId(id)
  }

  const handleSearchedStation = (id: number | undefined) => {
    setSearchedStationId(id)
  }

  const selectedStation = superChargerInfo.find(
    (station) => station.id === selectedStationId
  )

  const searchedStation = superChargerInfo.find(
    (station) => station.id === searchedStationId
  )

  const searchedStations = searchedStation
    ? [searchedStation]
    : superChargerInfo

  const handleCardClick = (id: number) => {
    handleSelectedStation(id)
    handleOpen()
  }

  return (
    <>
      <SearchInput onInputChange={handleSearchedStation} />
      <Stack spacing={2} my={3}>
        {searchedStations.map((item) => (
          <ChargingStationCard
            {...item}
            key={item.name}
            onClick={handleCardClick}
          />
        ))}
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            position: "fixed",
            bottom: 0,
            m: 0,
            width: "100%",
          },
        }}
      >
        {selectedStation && <StationDetailCard {...selectedStation} />}
      </Dialog>
    </>
  )
}
