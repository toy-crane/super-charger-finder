import React, { useEffect, useState } from "react"

import { Container, IconButton, Stack } from "@mui/material"
import ChargingStationCard from "../components/card"
import SearchInput from "../components/search-input"
import StationModal from "../components/station-modal"
import Head from "next/head"
import { inputFocusState, searchedStationIdState } from "../atoms"
import { useRecoilState, useRecoilValue } from "recoil"
import Layout from "../components/layout"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "../components/menu"
import { supabase } from "../libs/supabase-client"
import { InferGetServerSidePropsType } from "next"
import StationFilter from "../components/station-filter"
import { filteredStationsState, stationsState } from "../atoms/station"

export default function Home({
  initialStations,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [stations, setStations] = useRecoilState(stationsState)
  const fiteredStations = useRecoilValue(filteredStationsState)

  const [selectedStationId, setSelectedStationId] = useState<number>()
  const searchedStationId = useRecoilValue(searchedStationIdState)
  const isInputFocused = useRecoilValue(inputFocusState)
  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleDraweropen = () => setOpenDrawer((openDrawer) => !openDrawer)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSelectedStation = (id: number | undefined) => {
    setSelectedStationId(id)
  }

  const selectedStation = fiteredStations?.find(
    (station) => station.id === selectedStationId
  )

  const searchedStations = fiteredStations?.filter(
    (station) => !searchedStationId || station.id === searchedStationId
  )

  const handleCardClick = (id: number) => {
    handleSelectedStation(id)
    handleOpen()
  }

  useEffect(() => {
    setStations(initialStations)
  }, [initialStations, setStations])

  return (
    <>
      <Head>
        <title>가장 저렴한 슈퍼차저를 찾아보세요.</title>
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
        <meta property="og:image" content="/meta/og-image.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:title" content="슈차 파인더" />
        <meta property="og:site_name" content="슈차 파인더" />
        <meta
          property="og:description"
          content="가장 저렴한 슈퍼차저를 찾아보세요."
        />
        <meta
          property="og:url"
          content="https://super-charger-finder.vercel.app/"
        />
      </Head>
      <Layout.Header>
        <Container
          maxWidth="sm"
          sx={{
            mx: "auto",
            py: 2,
            display: "flex",
            gap: 1,
          }}
        >
          {!isInputFocused && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDraweropen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <SearchInput stations={stations} />
        </Container>
        <Container maxWidth="sm" sx={{ mx: "auto", display: "flex", gap: 1 }}>
          <StationFilter />
        </Container>
      </Layout.Header>
      <Layout.Main>
        <Stack spacing={2} my={3}>
          {searchedStations?.map((item) => (
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
      <Menu onClick={handleDraweropen} openDrawer={openDrawer} />
    </>
  )
}
export const getServerSideProps = async () => {
  const { data, error } = await supabase.from("stations").select()

  if (!data || error) {
    throw Error("정삭적으로 데이터를 가져오지 못했습니다.")
  }

  return {
    props: {
      initialStations: data,
    },
  }
}
