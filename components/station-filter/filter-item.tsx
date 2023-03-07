import { Box, Chip, Slider, Stack } from "@mui/material"
import React from "react"

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

export { FreeParkingFilter, ParkingFeeDiscountFilter }
