import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import { ICoinShadows, white, gray1, divider } from 'styles'
import { Shadows } from '@material-ui/core/styles/shadows'
import { blue, green } from '@material-ui/core/colors'
import { Theme } from '@material-ui/core'
import { TThemeMode } from 'types'

const ICoinTheme = (mode: TThemeMode): Theme => {
  const textPrimary = mode === 'dark' ? white : gray1

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: blue,
        secondary: green,
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
          elevation: 3
        }
      },

      overrides: {
        MuiTableCell: {
          root: {
            borderBottom: `1px solid ${divider}`
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
