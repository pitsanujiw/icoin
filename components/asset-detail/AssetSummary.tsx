import {
  Typography,
  Link,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  IconButton
} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Format, numberFormatter } from 'services'
import { ICommonRouteParams, IAssetSummary } from 'types'
import { Render } from 'use-react-common'
import { useLivePrice } from 'components'
import { useQuery, COIN_INFORMATION } from 'apollo'

interface IAssetSummaryContent extends ICommonRouteParams {
  summary: IAssetSummary
}

const AssetSummary: React.FC<ICommonRouteParams> = ({ id }) => {
  const { data } = useQuery<IAssetSummary>(COIN_INFORMATION, {
    variables: { id }
  })

  return Render.ensure(
    summary => <AssetSummaryContent id={id} summary={summary} />,
    data
  )
}

const AssetSummaryContent: React.FC<IAssetSummaryContent> = ({
  id,
  summary
}) => {
  const {
    explorer,
    marketCapUsd,
    name,
    priceUsd,
    rank,
    supply,
    symbol,
    volumeUsd24Hr,
    website
  } = summary.asset
  const { price } = useLivePrice(id, priceUsd)

  return (
    <section>
      <List>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Rank
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {rank}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              {name} ({symbol})
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.currency(price)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Market Cap
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.bigNumber(marketCapUsd)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Volume (24H)
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {Format.bigNumber(volumeUsd24Hr)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Supply
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Typography variant="subtitle2">
              <Box fontWeight="fontWeightMedium" component="span">
                {numberFormatter.format(supply)}
              </Box>
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider light />
      <List>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Explorer
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Link href={explorer} color="inherit" target="_blank">
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography color="textSecondary" variant="subtitle2">
              Website
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <Link href={website} color="inherit" target="_blank">
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </section>
  )
}

export { AssetSummary }
export { AssetSummaryContent }
