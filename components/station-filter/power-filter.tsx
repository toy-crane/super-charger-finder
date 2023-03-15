import { Chip, Stack } from "@mui/material"
import React from "react"
import { selector, useRecoilState, useRecoilValue } from "recoil"
import { FieldsValue, powerState } from "../../atoms/station-filter"

const PowerFields = [
  {
    value: "250",
    label: "V3",
  },
  {
    value: "120",
    label: "V2",
  },
]

export const PowerFieldValues = selector<FieldsValue<string>[]>({
  key: "powerFieldValues",
  get: ({ get }) => {
    const powers = get(powerState)
    const allField = {
      label: "모든 충전기",
      value: "all",
      active: powers.length === 0,
    }
    const fields = [
      allField,
      ...PowerFields.map(({ value, label }) => ({
        label,
        value,
        active: powers.includes(Number(value)),
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

const PowerFilter = () => {
  const [powers, setPowers] = useRecoilState(powerState)
  const fields = useRecoilValue(PowerFieldValues)
  const handleChipClick = (value: string) => {
    if (value === "all") setPowers([])
    else if (powers?.includes(Number(value))) {
      setPowers(powers?.filter((state) => state !== Number(value)))
    } else {
      setPowers(powers ? [...powers, Number(value)] : [Number(value)])
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

export default PowerFilter
