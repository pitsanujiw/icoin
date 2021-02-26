import { Typography, Grid, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

const FollowUs: React.FC = (): React.ReactElement => {
  return (
    <Grid justify="flex-end" container>
      <Grid item>
        <Typography variant="button">FOLLOW US</Typography>
      </Grid>
      <Grid spacing={1} justify="flex-end" container>
        <Grid item>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export { FollowUs }
