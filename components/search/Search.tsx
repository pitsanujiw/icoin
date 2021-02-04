import { Paper, TextField, InputAdornment, IconButton } from '@material-ui/core'
import { ContainerWrapper } from 'components'
import SearchIcon from '@material-ui/icons/Search'

const Search = (): React.ReactElement => {
  return (
    <Paper elevation={0} square>
      <ContainerWrapper>
        <TextField
          placeholder="Search for cryptocurrencies"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          fullWidth
        />
      </ContainerWrapper>
    </Paper>
  )
}

export { Search }
