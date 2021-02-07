import { Paper, Divider } from '@material-ui/core'
import { AssetSummary, AssetChart } from 'components'
import { useRouter } from 'next/router'
import { isString } from 'lodash'

const AssetDetail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (isString(id)) {
    return (
      <Paper square>
        <AssetSummary id={id} />
        <Divider light />
        <AssetChart id={id} />
      </Paper>
    )
  }

  return <></>
}

export { AssetDetail }
