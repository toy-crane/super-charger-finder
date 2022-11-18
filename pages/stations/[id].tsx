import { useRouter } from "next/router"
import { superChargerInfo } from "../../data"
import StationDetailCard from "./components/station-detail-card"

const ChargerDetail = () => {
  const router = useRouter()
  const id = Number(router.query.id)
  const superChager = superChargerInfo.find((sc) => sc.id === id)

  if (!superChager) {
    return null
  }

  return <StationDetailCard {...superChager} />
}

export default ChargerDetail
