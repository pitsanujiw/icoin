import {
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  makeStyles
} from '@material-ui/core'
import { ContainerWrapper } from 'components'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(
  theme => ({
    search: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    }
  }),
  {
    name: 'Search'
  }
)

const Search = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <Paper className={classes.search} square>
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
