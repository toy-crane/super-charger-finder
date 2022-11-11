import { Card, CardContent, Typography } from "@mui/material"
import { SuperCharger } from "../data"

interface ChargingStationCardProps extends SuperCharger {}

const ChargingStationCard = ({
  region,
  name,
  location,
  freeParkingChargeTime,
  chargingSpeed,
  DcCount,
}: ChargingStationCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          {region} | {name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          {location}
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
