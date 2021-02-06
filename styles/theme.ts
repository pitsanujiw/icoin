import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { ICoinShadows, white, gray1 } from 'styles'
import { Shadows } from '@material-ui/core/styles/shadows'
import { teal, green } from '@material-ui/core/colors'
import { Theme } from '@material-ui/core'
import { TThemeMode } from 'types'

const ICoinTheme = (mode: TThemeMode): Theme => {
  const textPrimary = mode === 'dark' ? white : gray1

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: teal,
        secondary: green,
        text: {
          primary: textPrimary
        }
      },

      shadows: ICoinShadows as Shadows,

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
