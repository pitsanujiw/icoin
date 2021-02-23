import React from 'react'
import { ISearchResponse } from 'types'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core'
import { SymbolIcon } from 'components'

const useStyles = makeStyles(
  theme => ({
    icon: {
      maxWidth: theme.spacing(5)
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

  return (
    <React.Fragment>
      {assets.edges.map(({ node }) => {
        const { id, name, symbol } = node

        return (
          <ListItem key={id}>
            <ListItemAvatar>
              <SymbolIcon
                name={name}
                symbol={symbol}
                className={classes.icon}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="button">{name}</Typography>}
              secondary={symbol}
            />
          </ListItem>
        )
      })}
    </React.Fragment>
  )
}

export { SearchAssetResults }
