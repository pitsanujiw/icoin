import { Format, Chart } from 'services'
import { IAssetHistories, ICommonRouteParams } from 'types'
import { Grid, Paper, Divider, makeStyles } from '@material-ui/core'
import {
  AssetHighLow,
  AssetSummary,
  ContainerWrapper,
  ExchangesAsset,
  LineChart,
  TimeSelection,
  useTime
} from 'components'
import { useEffect, useState } from 'react'
import { useLazyQuery, COIN_CHART } from 'apollo'

const useStyles = makeStyles(
  theme => ({
    exchanges: {
      paddingTop: theme.spacing(6)
    },

    wrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },

    timeSelection: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }),
  {
    name: 'AssetDetailContent'
  }
)

const AssetDetailContent: React.FC<ICommonRouteParams> = ({
  id
}): React.ReactElement => {
  const classes = useStyles()
  const { time, onTimeChange } = useTime()
  const [getIntervals, { data }] = useLazyQuery<IAssetHistories>(COIN_CHART)
  const [histories, setHistories] = useState<IAssetHistories>()
  const isPositive = Format.toNumber(histories, 'asset.changePercent24Hr') > 0

  useEffect(() => {
    const interval = Chart.calculateInterval(id, time)
    getIntervals({ variables: interval })
  }, [time])

  useEffect(() => {
    if (data) {
      setHistories(data)
    }
  }, [data])

  return (
    <ContainerWrapper>
      <Grid spacing={3} container>
        <Grid xs={12} sm={4} lg={3} item>
          <Paper>
            <AssetHighLow data={histories} />
            <Divider light />
            <AssetSummary id={id} />
          </Paper>
        </Grid>
        <Grid xs={12} sm={8} lg={9} item>
          <Paper className={classes.wrapper}>
            <LineChart isPositive={isPositive} time={time} data={histories} />
            <div className={classes.timeSelection}>
              <TimeSelection time={time} onTimeChange={onTimeChange} />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.exchanges}>
        <ExchangesAsset assetId={id} />
      </div>
    </ContainerWrapper>
  )
}

export { AssetDetailContent }
