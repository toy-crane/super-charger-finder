import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  useTheme,
} from "@mui/material"
import { SuperCharger } from "../data"

interface ChargingStationCardProps extends SuperCharger {
  onClick: (id: number) => void
}

const ChargingStationCard = ({
  name,
  address: { locationDetail, shortState, city, streetName },
  freeParkingChargeTime,
  chargingSpeed,
  stallCount,
  DcCount,
  commonName,
  onClick,
  id,
}: ChargingStationCardProps) => {
  const handleClick = () => {
    onClick(id)
  }

  return (
    <Card sx={{ minWidth: 275 }} variant="outlined" onClick={handleClick}>
      <CardContent>
        <Chip
          color="primary"
          size="small"
          variant={chargingSpeed === "250W" ? "filled" : "outlined"}
          label={chargingSpeed === "250W" ? "V3 | 250W" : "V2 | 120W"}
          sx={{ mb: 1 }}
        ></Chip>
        <Typography variant="h5" component="div">
          {shortState} - {city} | {commonName}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: "bold" }}>
          무료 회차:{" "}
          {freeParkingChargeTime
            ? freeParkingChargeTime === "free"
              ? "무료"
              : `${freeParkingChargeTime}분`
            : "없음"}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body2">슈퍼 차저: {stallCount}기</Typography>
        </Box>

        {DcCount && (
          <Typography variant="body2">
            데스티네이션 차저: {DcCount}기
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default ChargingStationCard
