import * as React from "react"
import Filter from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { Box, Collapse, Divider } from "@mui/material"

import { selector, useRecoilValue } from "recoil"
import {
  FilterFieldsValue,
  stationFilterState,
} from "../../atoms/station-filter"

import StateFilter from "./state-filter"
import PowerFilter from "./power-filter"
import HasDiscountFilter from "./has-discount-filter"
import FreeParkingFilter from "./free-parking-filter"
import ChargingMethodFilter from "./charging-method-filter"

export const stationFilterValuesState = selector<FilterFieldsValue[]>({
  key: "stationFilterValues",
  get: ({ get }) => {
    const { states, powers, hasDiscount, freeParkingTime, chargingMethods } =
      get(stationFilterState)
    return [
      {
        value: "states",
        label: states.length > 0 ? states.join(", ") : "지역",
        active: states.length > 0,
      },
      {
        value: "powers",
        label:
          powers.length > 0
            ? `속도 ${powers.map((p) => (p === 250 ? "V3" : "V2")).join(", ")}`
            : "충전속도",
        active: powers.length > 0,
      },
      {
        value: "chargingMethods",
        label:
          chargingMethods.length > 0
            ? `과금방식 ${chargingMethods
                .map((m) => (m === "minute" ? "분당" : "KW"))
                .join(", ")}`
            : "과금방식",
        active: chargingMethods.length > 0,
      },
      {
        value: "hasDiscount",
        label:
          hasDiscount === undefined
            ? "주차 할인"
            : hasDiscount
            ? "주차 할인 있음"
            : "주차 할인 없음",
        active: hasDiscount !== undefined,
      },
      {
        value: "freeParkingTime",
        label:
          JSON.stringify(freeParkingTime) === JSON.stringify([0, 70])
            ? "무료주차 시간"
            : JSON.stringify(freeParkingTime) === JSON.stringify([70, 70])
            ? `무료`
            : `무료주차 ${freeParkingTime[0]}분 ~ ${
                freeParkingTime[1] === 70 ? "" : `${freeParkingTime[1]}분`
              }`,
        active: JSON.stringify(freeParkingTime) !== JSON.stringify([0, 70]),
      },
    ]
  },
})

export default function StationFilter() {
  const stationFilterValues = useRecoilValue(stationFilterValuesState)
  const [openedFilterItem, setopenedFilterItem] =
    React.useState<FilterFieldsValue["value"]>()

  const handleClick = (value: FilterFieldsValue["value"]) => {
    setopenedFilterItem(value === openedFilterItem ? undefined : value)
  }
  const filterDivRef = React.useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterDivRef.current &&
      !filterDivRef.current.contains(event.target as Node)
    ) {
      setopenedFilterItem(undefined)
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [filterDivRef])

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      flexGrow={1}
      width="100%"
      ref={filterDivRef}
    >
      <Stack
        direction="row"
        spacing={1}
        py={1}
        sx={{ overflowX: "scroll", overflowY: "hidden" }}
      >
        {stationFilterValues.map((field) => (
          <Filter
            label={field.label}
            clickable
            color={
              field.active
                ? "primary"
                : openedFilterItem === field.value
                ? "primary"
                : "info"
            }
            variant={openedFilterItem === field.value ? "filled" : "outlined"}
            onClick={() => handleClick(field.value)}
            key={field.value}
          />
        ))}
      </Stack>
      <Collapse in={!!openedFilterItem}>
        <Divider />
        <Box py={1}>
          {openedFilterItem && (
            <SelectedFilterItemForm filterItem={openedFilterItem} />
          )}
        </Box>
      </Collapse>
    </Box>
  )
}

const SelectedFilterItemForm = ({
  filterItem,
}: {
  filterItem: FilterFieldsValue["value"]
}) => {
  switch (filterItem) {
    case "states":
      return <StateFilter />
    case "powers":
      return <PowerFilter />
    case "hasDiscount":
      return <HasDiscountFilter />
    case "freeParkingTime":
      return <FreeParkingFilter />
    case "chargingMethods":
      return <ChargingMethodFilter />
    default:
      return null
  }
}
