import { atom } from "recoil"

export const searchedStationIdState = atom<number | undefined>({
  key: "searchedStationId",
  default: undefined,
})
