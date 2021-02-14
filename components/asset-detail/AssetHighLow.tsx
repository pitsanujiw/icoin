import {
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core'
import { IAssetHistories } from 'types'
import { Price, Format } from 'services'
import { Render } from 'use-react-common'
import { SymbolIcon, ValueColor } from 'components'

interface IAssetHighLowProps {
  data: IAssetHistories
}

const useStyles = makeStyles(
  theme => ({
    icon: {
      width: theme.spacing(6)
    }
  }),
  {
    name: 'AssetHighLow'
  }
)

const AssetHighLow: React.FC<IAssetHighLowProps> = ({
  data
}): React.ReactElement => {
  const classes = useStyles()

  return Render.ensure(readyData => {
    const { asset, assetHistories } = readyData
    const convertedAssetHistories = Format.toNumbers(assetHistories, [
      'priceUsd'
    ])
    const { name, symbol, changePercent24Hr } = asset
    const high = Price.max(convertedAssetHistories)
    const low = Price.min(convertedAssetHistories)
    const average = (high + low) / 2

    return (
      <List>
        <ListItem>
          <SymbolIcon name={name} symbol={symbol} className={classes.icon} />
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              High
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(high)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Low
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(low)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Average
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(average)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Change
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <ValueColor value={changePercent24Hr} variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.percent(changePercent24Hr)}
              </Box>
            </ValueColor>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    )
  }, data)
}

export { AssetHighLow }
