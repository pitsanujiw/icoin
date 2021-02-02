import { AssetSummary } from 'components'
import { Container } from '@material-ui/core'
import { useRouter } from 'next/router'
import { isString } from 'lodash'

const Asset: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (isString(id)) {
    return (
      <Container>
        <AssetSummary id={id} />
      </Container>
    )
  }

  return <></>
}

export { Asset }
