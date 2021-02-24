import { ISearchResponse } from 'types'
import {
  ListItem,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core'
import { SymbolIcon } from 'components'

interface ISearchAssetResultsProps extends Pick<ISearchResponse, 'assets'> {
  onClick: FunctionStringCallback
}

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

const SearchAssetResults: React.FC<ISearchAssetResultsProps> = ({
  assets,
  onClick
}) => {
  const classes = useStyles()
  const { edges } = assets

  if (edges.length > 0) {
    return (
      <>
        {edges.map(({ node }) => {
          const { id, name, symbol } = node

          return (
            <ListItem onClick={() => onClick(id)} key={id} button>
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
