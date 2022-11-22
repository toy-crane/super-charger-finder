import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material"
import { SuperCharger } from "../data"

interface StationDetailCardProps extends SuperCharger {}

const isShareSupported = () => navigator.share ?? false

const StationDetailCard = ({
  name,
  address: { street, locationDetail },
  stallCount,
  DcCount,
  chargingSpeed,
  freeParkingChargeTime,
  parkingFee,
  parkingFeeDiscount,
  gps: { latitude, longitude },
}: StationDetailCardProps) => {
  const handleShare = () => {
    if (isShareSupported()) {
      navigator.share({
        title: street,
        text: street,
      })
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }
  return (
    <Card sx={{ px: 4 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {street} | {locationDetail}
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
          <Link
            href={`tmap://?rGoName=${name}&rGoX=${longitude}&rGoY=${latitude}`}
          >
            TMAP으로 보내기
          </Link>
          <Button onClick={handleShare}>테슬라로 경로 전송</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default StationDetailCard
