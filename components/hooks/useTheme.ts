import { ICoinTheme } from 'styles'
import { Theme } from '@material-ui/core'

const useTheme = (): Theme => {
  return ICoinTheme('light')
}

export { useTheme }
