import '@material-ui/core'

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    background: string
    gray1: string
    gray2: string
    gray3: string
    gray5: string
    primary: string
  }
}
