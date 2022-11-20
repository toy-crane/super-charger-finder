import { Autocomplete, Stack, TextField } from "@mui/material"
import { superChargerInfo } from "../data"

interface SearchInputProps {
  onInputChange: (id: number | undefined) => void
}

const SearchInput = ({ onInputChange }: SearchInputProps) => {
  return (
    <Autocomplete
      id="search input"
      options={superChargerInfo}
      noOptionsText="조건에 맞는 슈퍼차저가 존재하지 않습니다."
      getOptionLabel={(option) => `${option.region} | ${option.name}`}
      onChange={(_, value) =>
        value ? onInputChange(value.id) : onInputChange(undefined)
      }
      sx={{ my: 2 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="충전소 위치, 지역 검색"
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  )
}

export default SearchInput
