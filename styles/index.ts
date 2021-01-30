import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import Colors, { gray1, primary, secondary } from 'styles/colors'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },

    secondary: {
      main: secondary,
    },

    common: Colors,
  },

  typography: {
    fontFamily: "'Inter', sans-serif;",
    body1: { color: gray1 },
    button: { color: gray1 },
    subtitle2: { color: gray1 },
  },
})

export default responsiveFontSizes(Theme)
