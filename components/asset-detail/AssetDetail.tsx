import { AssetDetailContent } from 'components'
import { isString } from 'lodash'
import { useRouter } from 'next/router'

const AssetDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (isString(id)) {
    return <AssetDetailContent id={id} />
  }

  return <></>
}

export { AssetDetail }
