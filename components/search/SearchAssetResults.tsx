import { ISearchResponse } from 'types'
import {
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core'
import { SymbolIcon } from 'components'

const useStyles = makeStyles(
  theme => ({
    icon: {
      maxWidth: theme.spacing(4),
      marginRight: theme.spacing(2)
    }
  }),
  {
    name: 'SearchAssetResults'
  }
)

const SearchAssetResults: React.FC<Pick<ISearchResponse, 'assets'>> = ({
  assets
}) => {
  const classes = useStyles()
  const { edges } = assets

  if (edges.length > 0) {
    return (
      <>
        {edges.map(({ node }) => {
          const { id, name, symbol } = node

          return (
            <ListItem key={id}>
              <SymbolIcon
                name={name}
                symbol={symbol}
                className={classes.icon}
              />
              <ListItemText
                primary={
                  <Typography variant="button" component="p">
                    {name}
                  </Typography>
                }
                secondary={<Typography variant="caption">{symbol}</Typography>}
              />
            </ListItem>
          )
        })}
      </>
    )
  }

  return (
    <ListItem>
      <ListItemText
        primary={
          <Typography variant="subtitle2">
            Your search did not match any documents.
          </Typography>
        }
        secondary={
          <Typography variant="caption" color="textSecondary">
            Make sure that all words are spelled correctly
          </Typography>
        }
      />
    </ListItem>
  )
}

export { SearchAssetResults }
