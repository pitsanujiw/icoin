import {
  ClickAwayListener,
  Fade,
  IconButton,
  InputAdornment,
  List,
  Paper,
  TextField,
  fade,
  makeStyles
} from '@material-ui/core'
import { ContainerWrapper, IconLoading, SearchAssetResults } from 'components'
import { DURATION } from 'data'
import { ISearchResponse } from 'types'
import { SEARCH, useLazyQuery } from 'apollo'
import { throttle } from 'lodash'
import { useState, ChangeEvent } from 'react'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(
  theme => ({
    search: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    },

    wrapper: {
      zIndex: 1102,
      position: 'relative'
    },

    result: {
      position: 'absolute',
      width: '100%'
    },

    overlay: {
      position: 'fixed',
      backgroundColor: fade(theme.palette.common.white, 0.75),
      zIndex: 1101,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }),
  {
    name: 'Search'
  }
)

const Search = (): React.ReactElement => {
  const classes = useStyles()
  const [touch, setTouch] = useState(false)
  const [getSearches, { data, loading }] = useLazyQuery<ISearchResponse>(SEARCH)
  const isShowResult = touch && data

  const onChange = throttle((event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value

    getSearches({
      variables: { search }
    })
  }, DURATION * 4)

  return (
    <section>
      <Paper className={classes.search} square>
        <ContainerWrapper>
          <ClickAwayListener onClickAway={() => setTouch(false)}>
            <section className={classes.wrapper}>
              <TextField
                placeholder="Search for cryptocurrencies"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <IconLoading loading={loading}>
                          <SearchIcon />
                        </IconLoading>
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                onClick={() => setTouch(true)}
                onChange={onChange}
                fullWidth
              />
              {isShowResult && (
                <List className={classes.result} component={Paper}>
                  <SearchAssetResults assets={data.assets} />
                </List>
              )}
            </section>
          </ClickAwayListener>
        </ContainerWrapper>
      </Paper>
      <Fade in={touch}>
        <div className={classes.overlay} />
      </Fade>
    </section>
  )
}

export { Search }
