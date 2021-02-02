import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import { AssetItem } from 'components'
import { useAsync } from 'react-use'
import { API } from 'services'

const Assets = () => {
  const { loading, value } = useAsync(API.getAssets)

  if (!loading) {
    const { data } = value.data

    return (
      <Container>
        <TableContainer>
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
                <TableCell align="right">Price Graph</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((asset) => (
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
