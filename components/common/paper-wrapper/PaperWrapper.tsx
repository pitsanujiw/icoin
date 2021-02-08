import React from 'react'
import { Paper, PaperProps, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(
  theme => ({
    paper: {
      padding: theme.spacing(3)
    }
  }),
  {
    name: 'PaperWrapper'
  }
)

const PaperWrapper: React.FC<PaperProps> = ({
  className,
  ...restProps
}): React.ReactElement => {
  const classes = useStyles()

  return <Paper className={clsx(className, classes.paper)} {...restProps} />
}

export { PaperWrapper }
