import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import Link from "next/link"
import { station } from "../types/domain"

interface StationDetailCardProps extends station {}

const isShareSupported = () => navigator.share ?? false

const MODIFY_SUCHA_FORM_URL = "https://forms.gle/QPjyUhmLpTw2Ux3j9"

const StationDetailCard = ({
  name,
  street_name,
  location_detail,
  short_state,
  city,
  stall_count,
  dc_count,
  power_kilowatt,
  free_parking_charge_time,
  parking_fee,
  parking_fee_discount,
  latitude,
  longitude,
  common_name,
  kr_name,
  location_id,
}: StationDetailCardProps) => {
  const handleShare = () => {
    if (isShareSupported()) {
      navigator.share({
        title: street_name,
        text: `/${location_id}`,
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
          variant={power_kilowatt === 120 ? "filled" : "outlined"}
          label={power_kilowatt === 250 ? "V3 | 250W" : "V2 | 120W"}
          sx={{ mb: 1 }}
        ></Chip>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h5">
            {short_state} - {city} | {common_name}
          </Typography>
          <Link href={MODIFY_SUCHA_FORM_URL}>
            <EditIcon cursor="pointer" fontSize="small" />
          </Link>
        </Box>
        <Typography variant="subtitle1">{kr_name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {street_name}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {location_detail}
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1">충전</Typography>
          <Typography variant="body2" color="text.secondary">
            슈퍼 차저: {stall_count}기
          </Typography>
          {dc_count && (
            <Typography variant="body2" color="text.secondary">
              데스티네이션 차저: {dc_count}기
            </Typography>
          )}
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1">주차요금</Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            무료 회차 시간 -{" "}
            {free_parking_charge_time
              ? free_parking_charge_time === "free"
                ? "무료"
                : `${free_parking_charge_time}분`
              : "없음"}
          </Typography>
          <Typography
            variant="body2"
            sx={{ whiteSpace: "pre-line" }}
            color="text.secondary"
          >
            {parking_fee}
          </Typography>
        </Box>

        {parking_fee_discount && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">주차 할인</Typography>
            <Typography
              variant="body2"
              sx={{ whiteSpace: "pre-line" }}
              color="text.secondary"
            >
              {parking_fee_discount}
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
