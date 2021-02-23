import { CircularProgress } from '@material-ui/core'
import { ICommonProps } from 'types'

type TIconLoadingProps = Pick<ICommonProps, 'loading'>

const IconLoading: React.FC<TIconLoadingProps> = ({ loading, children }) => {
  if (loading) {
    return <CircularProgress size="1rem" />
  }

  return <>{children}</>
}

export { IconLoading }
