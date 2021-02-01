import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import Colors, { gray1, gray3, primary, secondary } from 'styles/colors'

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

  props: {
    MuiLink: {
      underline: 'none',
    },
  },

  overrides: {
    MuiTableCell: {
      root: {
        borderBottom: 'none',
      },
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
