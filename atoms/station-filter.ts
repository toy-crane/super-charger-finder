import { atom, selector } from "recoil"

export type StationFilterState = {
  states: string[]
  powers: number[]
  hasDiscount?: boolean
  freeParkingTime: [number, number] | []
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

export const freeParkingTimeState = atom<StationFilterState["freeParkingTime"]>(
  {
    key: "freeParkingTime",
    default: [0, 60],
  }
)

export const stationFilterState = selector<StationFilterState>({
  key: "stationFilter",
  get: ({ get }) => {
    return {
      states: get(statesState),
      powers: get(powerState),
      hasDiscount: get(hasDiscountState),
      freeParkingTime: get(freeParkingTimeState),
    }
  },
})

export const stationFilterValuesState = selector<FilterFieldsValue[]>({
  key: "stationFilterValues",
  get: ({ get }) => {
    const { states, powers, hasDiscount, freeParkingTime } =
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
            ? `속도 ${powers.map((p) => `${p}W`).join(", ")}`
            : "충전속도",
        active: powers.length > 0,
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
          freeParkingTime.length > 1
            ? `회차 ${freeParkingTime[0]}분 ~ ${freeParkingTime[1]}분`
            : "회차 시간",
        active: freeParkingTime.length > 1,
      },
    ]
  },
})
