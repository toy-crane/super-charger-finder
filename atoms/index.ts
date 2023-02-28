import { atom } from "recoil"

export type StationFilterStates = {
  states: string[]
  power: number[]
  hasDC?: boolean
  freeParkingTimeRange: number[]
  hasParkingDiscount?: boolean
}

export const searchedStationIdState = atom<number | undefined>({
  key: "searchedStationId",
  default: undefined,
})

export const inputFocusState = atom<boolean>({
  key: "inputFocusState",
  default: false,
})

export const statesState = atom<string[]>({
  key: "statesState",
  default: [],
})

export const powerState = atom<number[]>({
  key: "powerState",
  default: [],
})
