import * as React from "react"
import { station } from "../../types/domain"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { Box } from "@mui/material"
import {
  PowerFilter,
  StateFilter,
  DCFilter,
  FreeParkingFilter,
  ParkingFeeDiscountFilter,
} from "./filter-item"

interface Chip {
  key:
    | "power_kilowatt"
    | "free_parking_charge_time"
    | "dc_count"
    | "power_kilowatt"
    | "short_state"
    | "parking_fee_discount"
  label: "지역" | "충전속도" | "데스티네이션 차저" | "회차시간" | "주차할인"
  active: boolean
}

export default function StationFilter({ stations }: { stations: station[] }) {
  const [chips, setChips] = React.useState<readonly Chip[]>([
    { key: "short_state", label: "지역", active: false },
    { key: "power_kilowatt", label: "충전속도", active: false },
    { key: "dc_count", label: "데스티네이션 차저", active: false },
    { key: "free_parking_charge_time", label: "회차시간", active: false },
    { key: "parking_fee_discount", label: "주차할인", active: false },
  ])
  const [selectedFilter, setSelectedFilter] = React.useState<Chip | undefined>()

  const handleClick = (clickedChip: Chip) => {
    setChips((chips) =>
      chips.map((chip) =>
        chip.key === clickedChip.key ? { ...chip, active: !chip.active } : chip
      )
    )
    setSelectedFilter(clickedChip.active ? undefined : clickedChip)
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Stack direction="row" spacing={1} py={1}>
        {chips.map((chip) => (
          <Chip
            label={chip.label}
            clickable
            color={chip.active ? "primary" : "info"}
            variant="outlined"
            onClick={() => handleClick(chip)}
            key={chip.key}
          />
        ))}
      </Stack>
      {selectedFilter && <SelectedFilterItemForm filter={selectedFilter} />}
    </Box>
  )
}

const SelectedFilterItemForm = ({ filter }: { filter: Chip }) => {
  switch (filter.key) {
    case "short_state":
      return <StateFilter />
    case "power_kilowatt":
      return <PowerFilter />
    case "dc_count":
      return <DCFilter />
    case "free_parking_charge_time":
      return <FreeParkingFilter />
    case "parking_fee_discount":
      return <ParkingFeeDiscountFilter />
  }
}
