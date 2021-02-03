import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
  theme => ({
    logo: {
      display: 'flex',
      alignItems: 'center'
    },

    image: {
      maxWidth: theme.spacing(5)
    },

    title: {
      paddingLeft: theme.spacing(2)
    }
  }),
  {
    name: 'ICoinLogo'
  }
)

const ICoinLogo = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.logo}>
      <img src="/logo.svg" alt="Logo" className={classes.image} />
      <Typography variant="h5" className={classes.title}>
        iCoin
      </Typography>
    </div>
  )
}

export { ICoinLogo }
