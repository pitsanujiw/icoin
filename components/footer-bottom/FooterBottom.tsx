import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  makeStyles
} from '@material-ui/core'
import { DEVELOPER_IN, GITHUB } from 'data'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles(
  () => ({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }),
  {
    name: 'FooterBottom'
  }
)

const FooterBottom = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <AppBar position="relative" elevation={0}>
      <Container>
        <Toolbar className={classes.toolbar} variant="dense" disableGutters>
          <section>
            <Typography variant="caption">Created by Andy Ng with ❤</Typography>
            <Link href={DEVELOPER_IN} target="_blank">
              <IconButton color="secondary">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </section>
          <section>
            <Link href={GITHUB} target="_blank">
              <IconButton color="secondary">
                <GitHubIcon />
              </IconButton>
            </Link>
          </section>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export { FooterBottom }
