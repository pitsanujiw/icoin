import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { teal, green } from '@material-ui/core/colors'
import { Theme } from '@material-ui/core'
import { TThemeMode } from 'types'

const ICoinTheme = (mode: TThemeMode): Theme => {
  const textPrimary = mode === 'dark' ? '#FFFFFF' : '#333333'

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: teal,
        secondary: green,
        text: {
          primary: textPrimary
        }
      },

      props: {
        MuiLink: {
          underline: 'none'
        }
      },

      typography: {
        fontFamily: "'Inter', sans-serif;"
      }
    })
  )
}

export { ICoinTheme }
