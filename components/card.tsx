import { Box, Card, CardContent, Chip, Typography } from "@mui/material"
import { station } from "../types/domain"

interface ChargingStationCardProps extends station {
  onClick: (id: number) => void
}

const getChargingMethodLabel = (chargingMethod: string) => {
  switch (chargingMethod) {
    case "minute":
      return "분당 과금"
    case "kw":
      return "KW당 과금"
  }
}

const ChargingStationCard = ({
  short_state,
  city,
  free_parking_charge_time,
  power_kilowatt,
  charging_method,
  stall_count,
  dc_count,
  common_name,
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
          variant={power_kilowatt === 250 ? "filled" : "outlined"}
          label={
            power_kilowatt === 250
              ? `V3 | ${getChargingMethodLabel(charging_method)}`
              : `V2 | ${getChargingMethodLabel(charging_method)}`
          }
          sx={{ mb: 1 }}
        ></Chip>
        <Typography variant="h5" component="div">
          {short_state} - {city} | {common_name}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 0.5, fontWeight: "bold" }}>
          무료주차 시간:{" "}
          {free_parking_charge_time
            ? free_parking_charge_time === 70
              ? "무료"
              : `${free_parking_charge_time}분`
            : "없음"}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body2">슈퍼 차저: {stall_count}기</Typography>
        </Box>

        {dc_count && (
          <Typography variant="body2">
            데스티네이션 차저: {dc_count}기
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default ChargingStationCard
