import { Chip, Stack } from "@mui/material"
import React from "react"
import { selector, useRecoilState, useRecoilValue } from "recoil"
import { FieldsValue, statesState } from "../../atoms/station-filter"

export const StateNames = [
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

export const stateFieldValues = selector<FieldsValue<string>[]>({
  key: "stateFieldValues",
  get: ({ get }) => {
    const state = get(statesState)
    const allField = {
      label: "전국",
      value: "all",
      active: state.length === 0,
    }
    const fields = [
      allField,
      ...StateNames.map((stateName) => ({
        label: stateName,
        value: stateName,
        active: state.includes(stateName),
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

const StateFilter = () => {
  const [states, setStates] = useRecoilState(statesState)
  const fields = useRecoilValue(stateFieldValues)
  const handleChipClick = (stateName: string) => {
    if (stateName === "all") setStates([])
    else if (states?.includes(stateName)) {
      setStates(states.filter((state) => state !== stateName))
    } else {
      setStates(states ? [...states, stateName] : [stateName])
    }
  }
  return (
    <Stack direction="row" flexWrap="wrap" gap={0.5}>
      {fields.map((field) => (
        <Chip
          label={field.label}
          key={field.value}
          color={"info"}
          variant={field.active ? "filled" : "outlined"}
          clickable
          onClick={() => handleChipClick(field.value)}
        />
      ))}
    </Stack>
  )
}

export default StateFilter
