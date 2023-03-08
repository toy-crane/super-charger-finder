import { Chip, Stack } from "@mui/material"
import React from "react"
import { selector, useRecoilState, useRecoilValue } from "recoil"
import { FieldsValue, powerState } from "../../atoms/station-filter"

const PowerNames = [120, 250]

export const PowerFieldValues = selector<FieldsValue<number>[]>({
  key: "powerFieldValues",
  get: ({ get }) => {
    const powers = get(powerState)
    return PowerNames.map((name) => ({
      label: `${name}kW`,
      value: name,
      active: powers.includes(name),
    })).sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1))
  },
})

const PowerFilter = () => {
  const [powers, setPowers] = useRecoilState(powerState)
  const fields = useRecoilValue(PowerFieldValues)
  const handleChipClick = (value: number) => {
    if (powers?.includes(value)) {
      setPowers(powers?.filter((state) => state !== value))
    } else {
      setPowers(powers ? [...powers, value] : [value])
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
