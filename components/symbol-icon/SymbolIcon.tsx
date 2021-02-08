import { CDN } from 'services'
import { Img } from 'react-image'
import { TIconType, TSymbol } from 'types'
import { Fade, makeStyles } from '@material-ui/core'

interface ISymbolIconProps extends TSymbol {
  className?: string

  type?: TIconType
}

const useStyles = makeStyles(
  () => ({
    img: {
      width: '100%',
      height: '100%'
    }
  }),
  {
    name: 'SymbolIcon'
  }
)

const SymbolIcon: React.FC<ISymbolIconProps> = ({
  type = 'color',
  className,
  symbol,
  name
}) => {
  const classes = useStyles()

  return (
    <div className={className}>
      <Img
        alt={name}
        className={classes.img}
        src={[CDN.getIcon(symbol.toLowerCase(), type), CDN.defaultIcon]}
        container={children => (
          <Fade in>
            <div>{children}</div>
          </Fade>
        )}
      />
    </div>
  )
}

export { SymbolIcon }
