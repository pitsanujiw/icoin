import { Link, Typography, LinkProps } from '@material-ui/core'
import { MouseEvent } from 'react'
import { useRouter } from 'next/router'

const Route: React.FC<LinkProps> = ({ title, href, ...restProps }) => {
  const router = useRouter()
  const isRouted = href === router.route

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    router.push(href)
  }

  return (
    <Link onClick={onClick} color="inherit" href={href} {...restProps}>
      <Typography variant="subtitle2" color={isRouted ? 'primary' : 'initial'}>
        {title}
      </Typography>
    </Link>
  )
}

export { Route }
