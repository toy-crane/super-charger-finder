import { Autocomplete, Stack, TextField } from "@mui/material"
import { superChargerInfo } from "../data"

interface SearchInputProps {
  onInputChange: (id: number | undefined) => void
}

const SearchInput = ({ onInputChange }: SearchInputProps) => {
  return (
    <Stack spacing={2} marginTop={2}>
      <Autocomplete
        id="search input"
        options={superChargerInfo}
        getOptionLabel={(option) => `${option.region} | ${option.name}`}
        onChange={(_, value) =>
          value ? onInputChange(value.id) : onInputChange(undefined)
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="충전소 위치, 지역 검색"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </Stack>
  )
}

export default SearchInput
