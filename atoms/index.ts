import { atom, selector } from "recoil"

export const searchedStationIdState = atom<number | undefined>({
  key: "searchedStationId",
  default: undefined,
})

export const inputFocusState = atom<boolean>({
  key: "inputFocus",
  default: false,
})
