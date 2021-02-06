import { CDN } from 'services'
import { Img } from 'react-image'
import { TIconType, TSymbol } from 'types'

interface ISymbolIconProps extends TSymbol {
  className?: string

  type?: TIconType
}

const SymbolIcon: React.FC<ISymbolIconProps> = ({
  type = 'color',
  className,
  symbol,
  name
}) => {
  return (
    <Img
      src={[CDN.getIcon(symbol.toLowerCase(), type), CDN.defaultIcon]}
      alt={name}
      className={className}
    />
  )
}

export { SymbolIcon }
