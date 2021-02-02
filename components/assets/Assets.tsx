import {
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { AssetItem } from 'components'
import { useAsync } from 'react-use'
import { API } from 'services'

const useStyles = makeStyles(
  theme => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  }),
  {
    name: 'Assets'
  }
)

const Assets = () => {
  const classes = useStyles()
  const { loading, value } = useAsync(API.getAssets)

  if (!loading) {
    const { data } = value.data

    return (
      <Container className={classes.container}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name and Description</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Circularing Supply</TableCell>
                <TableCell align="right">Volume</TableCell>
                <TableCell align="right">Change (24h)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(asset => (
                <AssetItem key={asset.id} asset={asset} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  }

  return <></>
}

export { Assets }
