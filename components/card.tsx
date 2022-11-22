import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  useTheme,
} from "@mui/material"
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
  stallCount,
  DcCount,
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
          {region} | {name}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          {locationDetail}
        </Typography>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          무료 회차:{" "}
          {freeParkingChargeTime ? `${freeParkingChargeTime}분` : "없음"}
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
