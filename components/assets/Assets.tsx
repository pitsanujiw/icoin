import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { AssetItem, ContainerWrapper } from 'components'
import { useAsync } from 'react-use'
import { API } from 'services'

const Assets = (): React.ReactElement => {
  const { loading, value } = useAsync(API.getAssets)

  if (!loading) {
    const { data } = value.data

    return (
      <ContainerWrapper>
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
      </ContainerWrapper>
    )
  }

  return <></>
}

export { Assets }
