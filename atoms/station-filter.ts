import { atom, selector } from "recoil"

export type StationFilterState = {
  states: string[]
  powers: number[]
  hasDiscount?: boolean
}

export type FieldsValue<T> = {
  label: string
  value: T
  active: boolean
}

export interface FilterFieldsValue {
  value: keyof StationFilterState
  label: string
  active: boolean
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

export const hasDiscountState = atom<StationFilterState["hasDiscount"]>({
  key: "hasDiscount",
  default: undefined,
})

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

export const stateFieldValues = selector<FieldsValue<string>[]>({
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

export const hasDiscountFieldValues = selector<FieldsValue<boolean>[]>({
  key: "hasDiscountFieldValues",
  get: ({ get }) => {
    const hasDiscount = get(hasDiscountState)
    return [
      {
        label: "할인 있음",
        value: true,
        active: hasDiscount === true,
      },
      {
        label: "할인 없음",
        value: false,
        active: hasDiscount === false,
      },
    ]
  },
})

export const stationFilterState = selector<StationFilterState>({
  key: "stationFilter",
  get: ({ get }) => {
    return {
      states: get(statesState),
      powers: get(powerState),
      hasDiscount: get(hasDiscountState),
    }
  },
})

export const stationFilterValuesState = selector<FilterFieldsValue[]>({
  key: "stationFilterValues",
  get: ({ get }) => {
    const { states, powers, hasDiscount } = get(stationFilterState)
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
      {
        value: "hasDiscount",
        label:
          hasDiscount === undefined
            ? "주차 할인"
            : hasDiscount
            ? "할인 있음"
            : "할인 없음",
        active: hasDiscount !== undefined,
      },
    ]
  },
})
