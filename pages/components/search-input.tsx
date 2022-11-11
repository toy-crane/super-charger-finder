import { Autocomplete, Stack, TextField } from "@mui/material"
import { superChargerInfo } from "../data"

interface SearchInputProps {
  onInputChange: (id: number) => void
}

const SearchInput = ({ onInputChange }: SearchInputProps) => {
  return (
    <Stack spacing={2}>
      <Autocomplete
        id="search input"
        options={superChargerInfo}
        getOptionLabel={(option) => `${option.region} | ${option.name}`}
        onChange={(_, value) => value && onInputChange(value.id)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="충전소 위치, 지역 검색"
            margin="normal"
            fullWidth
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  )
}

export default SearchInput
