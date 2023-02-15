import { Autocomplete, TextField } from "@mui/material"
import { useRecoilState } from "recoil"
import { inputFocusState, searchedStationIdState } from "../atoms"
import { station } from "../types/domain"

interface SearchInputProps {
  stations: station[]
}

const SearchInput = ({ stations }: SearchInputProps) => {
  const [_, setSearchedStationId] = useRecoilState(searchedStationIdState)
  const [isFocused, setIsFocused] = useRecoilState(inputFocusState)

  const handleInputChage = (id: number | undefined) => {
    setSearchedStationId(id)
  }
  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Autocomplete
      id="search input"
      options={stations}
      onCopy={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{ flex: 1 }}
      noOptionsText="조건에 맞는 슈퍼차저가 존재하지 않습니다."
      getOptionLabel={(option) =>
        `${option.short_state}-${option.city} | ${option.common_name}`
      }
      onChange={(_, value) =>
        value ? handleInputChage(value.id) : handleInputChage(undefined)
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="충전소 위치, 지역 검색"
          unselectable="off"
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  )
}

export default SearchInput
