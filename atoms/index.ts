import { atom } from "recoil"

export const searchedStationIdState = atom<number | undefined>({
  key: "searchedStationId",
  default: undefined,
})

export const inputFocusState = atom<boolean>({
  key: "inputFocusState",
  default: false,
})
