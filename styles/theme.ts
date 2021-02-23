import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { divider, gray1, primary, white, ICoinShadows } from 'styles'
import { Shadows } from '@material-ui/core/styles/shadows'
import { teal, red } from '@material-ui/core/colors'
import { Theme } from '@material-ui/core'
import { TThemeMode } from 'types'

const ICoinTheme = (mode: TThemeMode): Theme => {
  const textPrimary = mode === 'dark' ? white : gray1

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: primary,
        secondary: teal,
        success: teal,
        error: red,
        text: {
          primary: textPrimary
        }
      },

      shadows: ICoinShadows as Shadows,

      props: {
        MuiLink: {
          underline: 'none'
        },

        MuiPaper: {
          elevation: 6
        }
      },

      overrides: {
        MuiTableCell: {
          root: {
            borderBottom: `1px solid ${divider}`
          }
        },

        MuiCircularProgress: {
          indeterminate: {
            animationDuration: '0.5s'
          }
        }
      },

      typography: {
        fontFamily: "'Inter', sans-serif;"
      }
    })
  )
}

export { ICoinTheme }
