import {
  Box,
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
  styled,
  Typography,
} from "@mui/material"
import { SuperCharger } from "../data"

interface StationDetailCardProps extends SuperCharger {}

const isShareSupported = () => navigator.share ?? false

const StationDetailCard = ({
  name,
  address: { streetName, locationDetail, shortState, city },
  stallCount,
  DcCount,
  chargingSpeed,
  freeParkingChargeTime,
  parkingFee,
  parkingFeeDiscount,
  gps: { latitude, longitude },
  commonName,
  KRName,
}: StationDetailCardProps) => {
  const handleShare = () => {
    if (isShareSupported()) {
      navigator.share({
        title: streetName,
        text: streetName,
      })
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }
  return (
    <Card sx={{ px: 3 }}>
      <CardContent>
        <Chip
          color="primary"
          size="small"
          variant={chargingSpeed === "250W" ? "filled" : "outlined"}
          label={chargingSpeed === "250W" ? "V3 | 250W" : "V2 | 120W"}
          sx={{ mb: 1 }}
        ></Chip>
        <Typography variant="h5">
          {shortState} - {city} | {commonName}
        </Typography>
        <Typography variant="subtitle1">{KRName}</Typography>
        <Typography variant="body1" color="text.secondary">
          {streetName}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {locationDetail}
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1">충전</Typography>
          <Typography variant="body2" color="text.secondary">
            슈퍼 차저: {stallCount}기
          </Typography>
          {DcCount && (
            <Typography variant="body2" color="text.secondary">
              데스티네이션 차저: {DcCount}기
            </Typography>
          )}
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1">주차요금</Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            무료 회차 시간 -{" "}
            {freeParkingChargeTime
              ? freeParkingChargeTime === "free"
                ? "무료"
                : `${freeParkingChargeTime}분`
              : "없음"}
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

        <CardActions sx={{ flexDirection: "column", gap: 1 }} disableSpacing>
          <Button
            variant="outlined"
            color="info"
            fullWidth
            onClick={() =>
              (document.location = `tmap://?rGoName=${name}&rGoX=${longitude}&rGoY=${latitude}`)
            }
          >
            TMAP으로 경로 전송
          </Button>
          <Button
            onClick={handleShare}
            variant="outlined"
            color="primary"
            fullWidth
          >
            테슬라로 경로 전송
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default StationDetailCard
