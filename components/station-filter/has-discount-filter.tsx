import { Chip, Stack } from "@mui/material"
import { selector, useRecoilState, useRecoilValue } from "recoil"
import { FieldsValue, hasDiscountState } from "../../atoms/station-filter"

export const hasDiscountFieldValues = selector<FieldsValue<boolean>[]>({
  key: "hasDiscountFieldValues",
  get: ({ get }) => {
    const hasDiscount = get(hasDiscountState)
    return [
      {
        label: "할인 있음",
        value: true,
        active: hasDiscount === true,
      },
      {
        label: "할인 없음",
        value: false,
        active: hasDiscount === false,
      },
    ]
  },
})

const HasDiscountFilter = () => {
  const [hasDiscount, setHasDiscount] = useRecoilState(hasDiscountState)
  const fields = useRecoilValue(hasDiscountFieldValues)
  const handleChipClick = (value: boolean) => {
    if (hasDiscount === value) {
      setHasDiscount(undefined)
    } else {
      setHasDiscount(value)
    }
  }
  return (
    <Stack direction="row" py={1} flexWrap="wrap" gap={0.5}>
      {fields.map((field) => (
        <Chip
          label={field.label}
          key={field.label}
          color="info"
          variant={field.active ? "filled" : "outlined"}
          clickable
          onClick={() => handleChipClick(field.value)}
        />
      ))}
    </Stack>
  )
}

export default HasDiscountFilter
