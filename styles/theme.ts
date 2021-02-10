import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import {
  divider,
  gray1,
  ICoinShadows,
  secondary,
  secondaryLight,
  secondaryDark,
  white
} from 'styles'
import { teal } from '@material-ui/core/colors'
import { Shadows } from '@material-ui/core/styles/shadows'
import { Theme } from '@material-ui/core'
import { TThemeMode } from 'types'

const ICoinTheme = (mode: TThemeMode): Theme => {
  const textPrimary = mode === 'dark' ? white : gray1

  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        primary: teal,
        secondary: {
          main: secondary,
          light: secondaryLight,
          dark: secondaryDark,
          contrastText: white
        },
        success: teal,
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
        }
      },

      typography: {
        fontFamily: "'Inter', sans-serif;"
      }
    })
  )
}

export { ICoinTheme }
