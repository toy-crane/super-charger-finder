import { atom, selector } from "recoil"
import { station } from "../types/domain"
import { stationFilterState } from "./station-filter"

export const stationsState = atom<station[]>({
  key: "stations",
  default: [],
})

export const filteredStationsState = selector<station[]>({
  key: "filteredStations",
  get: ({ get }) => {
    const stations = get(stationsState)
    const { states, powers, hasDiscount, freeParkingTime, chargingMethods } =
      get(stationFilterState)

    const filteredStations = stations.filter((station) => {
      if (states.length > 0 && !states.includes(station.short_state))
        return false
      if (powers.length > 0 && !powers.includes(station.power_kilowatt))
        return false
      if (
        hasDiscount !== undefined &&
        hasDiscount !== !!station.parking_fee_discount
      )
        return false
      if (
        freeParkingTime.length > 1 &&
        (station.free_parking_charge_time < (freeParkingTime[0] as number) ||
          station.free_parking_charge_time > (freeParkingTime[1] as number))
      )
        return false
      if (
        chargingMethods.length > 0 &&
        !chargingMethods.includes(station.charging_method)
      ) {
        return false
      }
      return true
    })

    return filteredStations
  },
})
