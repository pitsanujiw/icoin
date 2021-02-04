import { Chip, Grid } from '@material-ui/core'
import { TIME } from 'data'
import { ITime } from 'types'

const TimeSelection: React.FC<ITime> = ({
  time,
  onTimeChange
}): React.ReactElement => {
  return (
    <Grid spacing={1} container>
      {TIME.map(value => {
        const isSelected = value === time

        return (
          <Grid key={value} item>
            <Chip
              color={isSelected ? 'secondary' : 'default'}
              variant="outlined"
              onClick={() => onTimeChange(value)}
              label={value}
              key={value}
              clickable
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export { TimeSelection }
