import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material"
import { SuperCharger } from "../data"
import EditIcon from "@mui/icons-material/Edit"
import Link from "next/link"

interface StationDetailCardProps extends SuperCharger {}

const isShareSupported = () => navigator.share ?? false

const MODIFY_SUCHA_FORM_URL = "https://forms.gle/QPjyUhmLpTw2Ux3j9"

const StationDetailCard = ({
  name,
  address: { streetName, locationDetail, shortState, city },
  stallCount,
  DcCount,
  powerKilowatt,
  freeParkingChargeTime,
  parkingFee,
  parkingFeeDiscount,
  gps: { latitude, longitude },
  commonName,
  KRName,
  locationId,
}: StationDetailCardProps) => {
  const handleShare = () => {
    if (isShareSupported()) {
      navigator.share({
        title: streetName,
        text: `/${locationId}`,
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
          variant={powerKilowatt === 120 ? "filled" : "outlined"}
          label={powerKilowatt === 250 ? "V3 | 250W" : "V2 | 120W"}
          sx={{ mb: 1 }}
        ></Chip>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h5">
            {shortState} - {city} | {commonName}
          </Typography>
          <Link href={MODIFY_SUCHA_FORM_URL}>
            <EditIcon cursor="pointer" fontSize="small" />
          </Link>
        </Box>
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
