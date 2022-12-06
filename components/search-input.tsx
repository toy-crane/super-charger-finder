import { Autocomplete, TextField } from "@mui/material"
import { useRecoilState } from "recoil"
import { searchedStationIdState } from "../atoms"
import superChargerInfo from "../data"

const SearchInput = () => {
  const [_, setSearchedStationId] = useRecoilState(searchedStationIdState)

  const handleInputChage = (id: number | undefined) => {
    setSearchedStationId(id)
  }

  return (
    <Autocomplete
      id="search input"
      options={superChargerInfo}
      sx={{ flex: 1 }}
      noOptionsText="조건에 맞는 슈퍼차저가 존재하지 않습니다."
      getOptionLabel={(option) =>
        `${option.address.shortState}-${option.address.city} | ${option.commonName}`
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
