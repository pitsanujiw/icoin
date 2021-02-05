import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { blueGrey, orange } from '@material-ui/core/colors'

const Theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: blueGrey,
      secondary: orange,
      text: {
        primary: '#333333'
      }
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
)

export { Theme }
