import { Link, Button, Typography, LinkProps } from '@material-ui/core'
import { MouseEvent } from 'react'
import { useChangeRoute } from 'components/hooks'

const RouteDesktop: React.FC<LinkProps> = ({ title, href, ...restProps }) => {
  const { onPush } = useChangeRoute()

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onPush(href)
  }

  return (
    <Link onClick={onClick} color="inherit" href={href} {...restProps}>
      <Button size="large">
        <Typography variant="subtitle2">{title}</Typography>
      </Button>
    </Link>
  )
}

export { RouteDesktop }
