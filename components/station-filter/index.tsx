import * as React from "react"
import { station } from "../../types/domain"
import Filter from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { Box } from "@mui/material"
import { StateFilter } from "./filter-item"

import { useRecoilValue } from "recoil"
import {
  stationFilterState,
  StationFilterState,
  stationFilterLablesState,
} from "../../atoms/station-filter"

interface Filter {
  key: keyof StationFilterState
  label: string
}

const StationFilterItems: Filter[] = [{ key: "states", label: "지역" }]

export default function StationFilter() {
  const stationFilter = useRecoilValue(stationFilterState)
  const stationFilterLabels = useRecoilValue(stationFilterLablesState)
  const [openedFilter, setOpenedFilter] = React.useState<Filter | null>(null)

  const handleClick = (clickedChip: Filter) => {
    setOpenedFilter((openedFilter) =>
      openedFilter?.key === clickedChip?.key ? null : clickedChip
    )
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Stack direction="row" spacing={1} py={1}>
        {StationFilterItems.map((item) => (
          <Filter
            label={stationFilterLabels[item.key]}
            clickable
            color={stationFilter[item.key] ? "primary" : "info"}
            variant={openedFilter?.key === item.key ? "filled" : "outlined"}
            onClick={() => handleClick(item)}
            key={item.key}
          />
        ))}
      </Stack>
      {openedFilter && <SelectedFilterItemForm filter={openedFilter} />}
    </Box>
  )
}

const SelectedFilterItemForm = ({ filter }: { filter: Filter }) => {
  switch (filter.key) {
    case "states":
      return <StateFilter />
    default:
      return null
  }
}
