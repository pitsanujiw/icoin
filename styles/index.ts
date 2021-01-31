import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import Colors, { white, gray1, gray3, primary, secondary } from 'styles/colors'

const Theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: white,
        },
      },
    },
  },

  palette: {
    primary: {
      main: primary,
    },

    secondary: {
      main: secondary,
    },

    common: Colors,
  },

  props: {
    MuiLink: {
      underline: 'none',
    },
  },

  typography: {
    fontSize: 13,
    fontFamily: "'Inter', sans-serif;",
    body1: { color: gray1 },
    button: { color: gray1 },
    subtitle2: { color: gray3 },
  },
})

export default responsiveFontSizes(Theme)
