import { AssetSummary, AssetChart } from 'components'
import { useRouter } from 'next/router'
import { isString } from 'lodash'

const AssetDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (isString(id)) {
    return (
      <>
        <AssetSummary id={id} />
        <AssetChart id={id} />
      </>
    )
  }

  return <></>
}

export { AssetDetail }