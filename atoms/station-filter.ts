import { atom, selector } from "recoil"

export type StationFilterState = {
  states: string[]
}

export type FieldsValue = {
  label: string
  value: string
  active: boolean
}

export interface FilterFieldsValue extends FieldsValue {
  value: keyof StationFilterState
}

const StateNames = [
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

export const statesState = atom<StationFilterState["states"]>({
  key: "states",
  default: [],
})

export const stateFieldValues = selector<FieldsValue[]>({
  key: "stateFieldValues",
  get: ({ get }) => {
    const state = get(statesState)
    return StateNames.map((stateName) => ({
      label: stateName,
      value: stateName,
      active: state.includes(stateName),
    })).sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1))
  },
})

export const stationFilterState = selector<StationFilterState>({
  key: "stationFilter",
  get: ({ get }) => {
    return {
      states: get(statesState),
    }
  },
})

export const stationFilterValuesState = selector<FilterFieldsValue[]>({
  key: "stationFilterValues",
  get: ({ get }) => {
    const { states } = get(stationFilterState)
    return [
      {
        value: "states",
        label: states.length > 0 ? states.join(", ") : "지역",
        active: states.length > 0,
      },
    ]
  },
})
