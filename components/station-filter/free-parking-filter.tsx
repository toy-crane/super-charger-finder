import { Box, Chip, Slider, Stack } from "@mui/material"
import React from "react"
import { selector, useRecoilState, useRecoilValue } from "recoil"
import { FieldsValue, freeParkingTimeState } from "../../atoms/station-filter"

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

const PARKING_TIMES = ["10", "20", "30", "40", "50"]

export const FreeParkingFieldValues = selector<FieldsValue<string>[]>({
  key: "freeParkingFieldValues",
  get: ({ get }) => {
    const freeParkingTime = get(freeParkingTimeState)
    const allField = {
      label: "전체",
      value: "all",
      active: JSON.stringify(freeParkingTime) === JSON.stringify([0, 60]),
    }
    const freeField = {
      label: "무료",
      value: "60",
      active: JSON.stringify(freeParkingTime) === JSON.stringify([60, 60]),
    }
    const fields = [
      allField,
      ...PARKING_TIMES.map((time) => ({
        label: `${time}분~`,
        value: time,
        active:
          JSON.stringify(freeParkingTime) ===
          JSON.stringify([Number(time), 60]),
      })),
      freeField,
    ]
    return fields
  },
})

const FreeParkingFilter = () => {
  const [freeParkingTime, setFreeParkingTime] =
    useRecoilState(freeParkingTimeState)
  const fields = useRecoilValue(FreeParkingFieldValues)

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setFreeParkingTime(newValue as [number, number])
  }

  const handleChipClick = (value: string) => {
    if (value === "all") setFreeParkingTime([0, 60])
    else if (value === "60") setFreeParkingTime([60, 60])
    else setFreeParkingTime([Number(value), 60])
  }

  return (
    <Box>
      <Box px={2}>
        <Slider
          aria-label="parking time"
          onChange={handleSliderChange}
          value={freeParkingTime}
          getAriaValueText={(value) => `${value} 분`}
          marks={marks}
          step={5}
          min={0}
          max={60}
        />
      </Box>
      <Stack direction="row" flexWrap="wrap" gap={0.5} py={1}>
        {fields.map(({ label, value, active }) => (
          <Chip
            label={label}
            key={label}
            clickable
            color="info"
            variant={active ? "filled" : "outlined"}
            onClick={() => handleChipClick(value)}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default FreeParkingFilter
