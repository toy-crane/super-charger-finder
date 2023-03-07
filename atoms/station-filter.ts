import { atom, selector } from "recoil"

export type StationFilterState = {
  states: string[]
  powers: number[]
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

const PowerNames = [120, 250]

export const statesState = atom<StationFilterState["states"]>({
  key: "states",
  default: [],
})

export const powerState = atom<StationFilterState["powers"]>({
  key: "powers",
  default: [],
})

export const PowerFieldValues = selector<FieldsValue[]>({
  key: "powerFieldValues",
  get: ({ get }) => {
    const powers = get(powerState)
    return PowerNames.map((name) => ({
      label: `${name}kW`,
      value: String(name),
      active: powers.includes(name),
    })).sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1))
  },
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
      powers: get(powerState),
    }
  },
})

export const stationFilterValuesState = selector<FilterFieldsValue[]>({
  key: "stationFilterValues",
  get: ({ get }) => {
    const { states, powers } = get(stationFilterState)
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
            ? powers.map((p) => `${p}W`).join(", ")
            : "충전속도",
        active: powers.length > 0,
      },
    ]
  },
})
