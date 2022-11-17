import { useRouter } from "next/router"

const ChargerDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>ChargerID: {id}</p>
}

export default ChargerDetail
