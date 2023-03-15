import { atom, selector } from "recoil"

export type StationFilterState = {
  states: string[]
  powers: number[]
  hasDiscount?: boolean
  chargingMethods: string[]
  freeParkingTime: [number, number]
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

export const chargingMethodsState = atom<StationFilterState["chargingMethods"]>(
  {
    key: "chargingMethods",
    default: [],
  }
)

export const freeParkingTimeState = atom<StationFilterState["freeParkingTime"]>(
  {
    key: "freeParkingTime",
    default: [0, 70],
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
      chargingMethods: get(chargingMethodsState),
    }
  },
})
