import { AssetSummary } from 'components'
import { useRouter } from 'next/router'
import { isString } from 'lodash'

const Asset: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (isString(id)) {
    return (
      <>
        <AssetSummary id={id} />
      </>
    )
  }

  return <></>
}

export { Asset }
