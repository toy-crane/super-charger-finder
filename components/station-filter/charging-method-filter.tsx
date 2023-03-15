import { Chip, Stack } from "@mui/material"
import React from "react"
import { selector, useRecoilState, useRecoilValue } from "recoil"
import {
  chargingMethodsState,
  FieldsValue,
  powerState,
} from "../../atoms/station-filter"

const MethodFields = [
  {
    label: "분당",
    value: "minute",
  },
  {
    label: "KW",
    value: "kw",
  },
]

export const ChargingMethodFieldValues = selector<FieldsValue<string>[]>({
  key: "ChargingMethodsFieldValues",
  get: ({ get }) => {
    const methods = get(chargingMethodsState)
    const allField = {
      label: "모든 과금방식",
      value: "all",
      active: methods.length === 0,
    }
    const fields = [
      allField,
      ...MethodFields.map(({ value, label }) => ({
        label,
        value,
        active: methods.includes(value),
      })),
    ]
    return [
      fields[0],
      ...fields
        .slice(1)
        .sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1)),
    ]
  },
})

const ChargingMethodFilter = () => {
  const [methods, setMethods] = useRecoilState(chargingMethodsState)
  const fields = useRecoilValue(ChargingMethodFieldValues)
  const handleChipClick = (value: string) => {
    if (value === "all") setMethods([])
    else if (methods?.includes(value)) {
      setMethods(methods?.filter((method) => method !== value))
    } else {
      setMethods(methods ? [...methods, value] : [value])
    }
  }
  return (
    <Stack direction="row" flexWrap="wrap" gap={0.5}>
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
  )
}

export default ChargingMethodFilter
