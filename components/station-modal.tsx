import { autocompleteClasses, Dialog } from "@mui/material"
import { SuperCharger } from "../data"
import StationDetailCard from "./station-detail-card"

interface StationModalProps {
  open: boolean
  onClose: () => void
  selectedStation?: SuperCharger
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
    {selectedStation && <StationDetailCard {...selectedStation} />}
  </Dialog>
)

export default StationModal
