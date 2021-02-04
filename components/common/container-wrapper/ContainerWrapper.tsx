import React from 'react'
import { Container, ContainerProps, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(
  theme => ({
    container: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    }
  }),
  {
    name: 'ContainerWrapper'
  }
)

const ContainerWrapper: React.FC<ContainerProps> = ({
  className,
  ...restProps
}): React.ReactElement => {
  const classes = useStyles()

  return (
    <Container className={clsx(className, classes.container)} {...restProps} />
  )
}

export { ContainerWrapper }
