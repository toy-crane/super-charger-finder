import { Dialog, IconButton } from "@mui/material"
import StationDetailCard from "./station-detail-card"
import CloseIcon from "@mui/icons-material/Close"
import { station } from "../types/domain"

interface StationModalProps {
  open: boolean
  onClose: () => void
  selectedStation?: station
}

const StationModal = ({
  open,
  onClose,
  selectedStation,
}: StationModalProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{
      m: 0,
    }}
    PaperProps={{
      sx: {
        position: "fixed",
        m: 0,
        bottom: 0,
        width: "100%",
      },
    }}
  >
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
      }}
    >
      <CloseIcon />
    </IconButton>
    {selectedStation && <StationDetailCard {...selectedStation} />}
  </Dialog>
)

export default StationModal
