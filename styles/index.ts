import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { teal, orange } from '@material-ui/core/colors'

const Theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: orange
  },

  props: {
    MuiLink: {
      underline: 'none'
    }
  },

  typography: {
    fontSize: 13,
    fontFamily: "'Roboto', sans-serif;"
  }
})

export default responsiveFontSizes(Theme)
