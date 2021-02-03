import { CDN } from 'services'
import { Img } from 'react-image'
import { TSymbol } from 'types'

const SymbolIcon: React.FC<TSymbol> = ({ symbol, name }) => {
  return (
    <Img
      src={[CDN.getIcon(symbol.toLowerCase()), CDN.defaultIcon]}
      alt={name}
    />
  )
}

export { SymbolIcon }
