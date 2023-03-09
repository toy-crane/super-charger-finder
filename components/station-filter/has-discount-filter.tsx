import { Chip, Stack } from "@mui/material"
import { selector, useRecoilValue, useSetRecoilState } from "recoil"
import { FieldsValue, hasDiscountState } from "../../atoms/station-filter"

export const hasDiscountFieldValues = selector<FieldsValue<string>[]>({
  key: "hasDiscountFieldValues",
  get: ({ get }) => {
    const hasDiscount = get(hasDiscountState)
    return [
      {
        label: "전체",
        value: "all",
        active: hasDiscount === undefined,
      },
      {
        label: "할인 있음",
        value: "true",
        active: hasDiscount === true,
      },
      {
        label: "할인 없음",
        value: "false",
        active: hasDiscount === false,
      },
    ]
  },
})

const HasDiscountFilter = () => {
  const setHasDiscount = useSetRecoilState(hasDiscountState)
  const fields = useRecoilValue(hasDiscountFieldValues)
  const handleChipClick = (value: string) => {
    if (value === "all") setHasDiscount(undefined)
    else if (value === "true") setHasDiscount(true)
    else {
      setHasDiscount(false)
    }
  }
  return (
    <Stack direction="row" flexWrap="wrap" gap={0.5}>
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
