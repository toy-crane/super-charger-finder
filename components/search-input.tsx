import { Autocomplete, Stack, TextField } from "@mui/material"
import { superChargerInfo } from "../data"
import { useRecoilState } from "recoil"
import { searchedStationIdState } from "../atoms"

const SearchInput = () => {
  const [_, setSearchedStationId] = useRecoilState(searchedStationIdState)

  const handleInputChage = (id: number | undefined) => {
    setSearchedStationId(id)
  }

  return (
    <Autocomplete
      id="search input"
      options={superChargerInfo}
      noOptionsText="조건에 맞는 슈퍼차저가 존재하지 않습니다."
      getOptionLabel={(option) => `${option.region} | ${option.name}`}
      onChange={(_, value) =>
        value ? handleInputChage(value.id) : handleInputChage(undefined)
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
