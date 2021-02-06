import { Typography, TypographyProps, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

interface IValueColorProps extends TypographyProps {
  value: number
}

const useStyles = makeStyles(
  theme => ({
    up: {
      color: theme.palette.success.light
    },

    down: {
      color: theme.palette.error.light
    }
  }),
  {
    name: 'ValueColor'
  }
)

const ValueColor: React.FC<IValueColorProps> = ({
  value,
  className,
  ...restProps
}) => {
  const classes = useStyles()

  return (
    <Typography
      className={clsx(className, {
        [classes.up]: value > 0,
        [classes.down]: value < 0
      })}
      component="span"
      {...restProps}
    />
  )
}

export { ValueColor }
