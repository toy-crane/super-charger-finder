import React, { useState } from "react"

import { Box, Container, Stack } from "@mui/material"
import ChargingStationCard from "../components/card"
import SearchInput from "../components/search-input"
import { superChargerInfo } from "../data"
import StationModal from "../components/station-modal"
import Head from "next/head"
import { searchedStationIdState } from "../atoms"
import { useRecoilValue } from "recoil"
import Layout from "../components/layout"

export default function Home() {
  const [selectedStationId, setSelectedStationId] = useState<number>()
  const searchedStationId = useRecoilValue(searchedStationIdState)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSelectedStation = (id: number | undefined) => {
    setSelectedStationId(id)
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
      <Head>
        <title>가장 효율적인 슈퍼차저를 찾아 보세요</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Super charger Finder" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout.Header>
        <Container maxWidth="sm" sx={{ mx: "auto", py: 2 }}>
          <SearchInput />
        </Container>
      </Layout.Header>
      <Layout.Main>
        <Stack spacing={2} my={3}>
          {searchedStations.map((item) => (
            <ChargingStationCard
              {...item}
              key={item.name}
              onClick={handleCardClick}
            />
          ))}
        </Stack>
      </Layout.Main>
      <StationModal
        open={open}
        onClose={handleClose}
        selectedStation={selectedStation}
      />
    </>
  )
}
