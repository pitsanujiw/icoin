import {
  Paper,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  makeStyles,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(
  theme => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }),
  {
    name: 'Search',
  }
)

const Search = () => {
  const classes = useStyles()

  return (
    <Paper elevation={0} square>
      <Container className={classes.container}>
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
            ),
          }}
          fullWidth
        />
      </Container>
    </Paper>
  )
}

export { Search }
