import { ButtonGroup, Button } from '@material-ui/core'
import { TIME } from 'data'
import { ITime } from 'types'

const TimeSelection: React.FC<ITime> = ({
  time,
  onTimeChange
}): React.ReactElement => {
  return (
    <ButtonGroup>
      {TIME.map(value => {
        const isSelected = value === time

        return (
          <Button
            variant={isSelected ? 'contained' : 'outlined'}
            color={isSelected ? 'primary' : 'default'}
            key={value}
            onClick={() => onTimeChange(value)}
          >
            {value}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}

export { TimeSelection }
