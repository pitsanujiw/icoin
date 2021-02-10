import { Chip, Grid, Avatar } from '@material-ui/core'
import { TIME } from 'data'
import { ITime, TTime } from 'types'

const TimeSelection: React.FC<ITime> = ({
  time,
  onTimeChange
}): React.ReactElement => {
  const getLabel = (time: TTime) => {
    switch (time) {
      case '1D':
        return '1 Day'
      case '1W':
        return '1 Week'
      case '1M':
        return '1 Month'
      case '3M':
        return '3 Months'
      case '6M':
        return '6 Months'
      case '1Y':
        return '1 Year'
      case 'ALL':
        return 'Everything'
    }
  }

  return (
    <Grid spacing={1} container>
      {TIME.map(value => {
        const isSelected = value === time

        return (
          <Grid key={value} item>
            <Chip
              variant="outlined"
              color={isSelected ? 'primary' : 'secondary'}
              onClick={() => onTimeChange(value)}
              avatar={<Avatar>{value}</Avatar>}
              label={getLabel(value)}
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
