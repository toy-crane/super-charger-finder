import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material"
import { SuperCharger } from "../data"

interface StationDetailCardProps extends SuperCharger {}

const StationDetailCard = ({
  name,
  address,
  stallCount,
  DcCount,
  chargingSpeed,
  freeParkingChargeTime,
  parkingFee,
  parkingFeeDiscount,
}: StationDetailCardProps) => (
  <Card sx={{ px: 4 }}>
    <CardContent>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1" color="text.secondary" mb={2}>
        {address.street} | {address.locationDetail}
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">충전</Typography>
        <Typography variant="body2" color="text.secondary">
          슈퍼 차저 대수 - {chargingSpeed} {stallCount}기
        </Typography>
        {DcCount && (
          <Typography variant="body2" color="text.secondary">
            데스티네이션 차저 대수 - {DcCount}기
          </Typography>
        )}
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">주차요금</Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          무료 회차 시간 -{" "}
          {freeParkingChargeTime ? `${freeParkingChargeTime}분` : "없음"}
        </Typography>
        <Typography
          variant="body2"
          sx={{ whiteSpace: "pre-line" }}
          color="text.secondary"
        >
          {parkingFee}
        </Typography>
      </Box>

      {parkingFeeDiscount && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1">주차 할인</Typography>
          <Typography
            variant="body2"
            sx={{ whiteSpace: "pre-line" }}
            color="text.secondary"
          >
            {parkingFeeDiscount}
          </Typography>
        </Box>
      )}

      <CardActions>
        <Button size="large" color="primary" variant="contained">
          테슬라로 경로 보내기
        </Button>
        <Button size="large" color="secondary" variant="contained">
          TMAP으로 경로 보내기
        </Button>
      </CardActions>
    </CardContent>
  </Card>
)

export default StationDetailCard
