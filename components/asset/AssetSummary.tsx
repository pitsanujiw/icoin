import { Container } from '@material-ui/core'
import { useQuery, COIN_INFORMATION } from 'apollo'

interface IAssetSummaryProps {
  id: string
}

const AssetSummary: React.FC<IAssetSummaryProps> = ({ id }) => {
  useQuery(COIN_INFORMATION, {
    variables: { id }
  })

  return (
    <Container>
      <div></div>
    </Container>
  )
}

export { AssetSummary }
