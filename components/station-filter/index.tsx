import * as React from "react"
import Filter from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { Box } from "@mui/material"
import { StateFilter } from "./filter-item"

import { useRecoilValue } from "recoil"
import { stationFilterValuesState } from "../../atoms/station-filter"

export default function StationFilter() {
  const stationFilterValues = useRecoilValue(stationFilterValuesState)
  const [openedFilterItem, setopenedFilterItem] = React.useState<string>()

  const handleClick = (value: string) => {
    setopenedFilterItem(value === openedFilterItem ? undefined : value)
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Stack direction="row" spacing={1} py={1}>
        {stationFilterValues.map((field) => (
          <Filter
            label={field.label}
            clickable
            color={field.active ? "primary" : "info"}
            variant={openedFilterItem === field.value ? "filled" : "outlined"}
            onClick={() => handleClick(field.value)}
            key={field.value}
          />
        ))}
      </Stack>
      {openedFilterItem && (
        <SelectedFilterItemForm filterItem={openedFilterItem} />
      )}
    </Box>
  )
}

const SelectedFilterItemForm = ({ filterItem }: { filterItem: string }) => {
  switch (filterItem) {
    case "states":
      return <StateFilter />
    default:
      return null
  }
}
