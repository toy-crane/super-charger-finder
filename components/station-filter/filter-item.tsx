import { Box, Chip, Slider, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { statesState } from "../../atoms"

const StateNames = [
  "서울",
  "경기",
  "인천",
  "강원",
  "충북",
  "충남",
  "대전",
  "세종",
  "전북",
  "전남",
  "광주",
  "경북",
  "경남",
  "대구",
  "울산",
  "부산",
  "제주",
]

const StateFilter = () => {
  const [states, setStates] = useRecoilState(statesState)
  const handleChipClick = (stateName: string) => {
    if (states.includes(stateName)) {
      setStates(states.filter((state) => state !== stateName))
    } else {
      setStates([...states, stateName])
    }
  }
  return (
    <Stack direction="row" py={1} flexWrap="wrap" gap={0.5}>
      {StateNames.map((stateName) => (
        <Chip
          label={stateName}
          key={stateName}
          color={states.includes(stateName) ? "primary" : "info"}
          clickable
          onClick={() => handleChipClick(stateName)}
        />
      ))}
    </Stack>
  )
}

const PowerFilter = () => {
  return (
    <Stack direction="row" py={1} flexWrap="wrap" gap={0.5}>
      <Chip label="V2 | 120W" />
      <Chip label="V3 | 250W" />
    </Stack>
  )
}

const DCFilter = () => {
  return (
    <Stack direction="row" py={1} flexWrap="wrap" gap={0.5}>
      <Chip label="있음" />
      <Chip label="없음" />
    </Stack>
  )
}

const marks = [
  {
    value: 0,
    label: "없음",
  },
  {
    value: 10,
    label: "10분",
  },
  {
    value: 20,
    label: "20분",
  },
  {
    value: 30,
    label: "30분",
  },
  {
    value: 40,
    label: "40분",
  },
  {
    value: 50,
    label: "50분",
  },
  {
    value: 60,
    label: "무료",
  },
]

const FreeParkingFilter = () => {
  const [value, setValue] = React.useState<number[]>([20, 40])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }
  return (
    <Box>
      <Slider
        aria-label="parking time"
        onChange={handleChange}
        value={value}
        getAriaValueText={(value) => `${value} 분`}
        valueLabelDisplay="auto"
        marks={marks}
        step={5}
        min={0}
        max={60}
      />
    </Box>
  )
}

const ParkingFeeDiscountFilter = () => {
  return (
    <Stack direction="row" py={1} flexWrap="wrap" gap={0.5}>
      <Chip label="있음" />
      <Chip label="없음" />
    </Stack>
  )
}

export {
  StateFilter,
  PowerFilter,
  DCFilter,
  FreeParkingFilter,
  ParkingFeeDiscountFilter,
}
