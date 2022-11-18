import { Card, CardContent, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { SuperCharger } from "../data"

interface ChargingStationCardProps extends SuperCharger {
  onClick: (id: number) => void
}

const ChargingStationCard = ({
  region,
  name,
  address: { locationDetail },
  freeParkingChargeTime,
  chargingSpeed,
  DcCount,
  onClick,
  id,
}: ChargingStationCardProps) => {
  const router = useRouter()
  const handleClick = () => {
    onClick(id)
  }

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined" onClick={handleClick}>
      <CardContent>
        <Typography variant="h5" component="div">
          {region} | {name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          {locationDetail}
        </Typography>
        <Typography variant="body2">
          무료 회차:{" "}
          {freeParkingChargeTime ? `${freeParkingChargeTime}분` : "없음"} |{" "}
          {chargingSpeed}
        </Typography>
        {DcCount && (
          <Typography variant="body2">
            데스티네이션 차저: {DcCount}대
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default ChargingStationCard
