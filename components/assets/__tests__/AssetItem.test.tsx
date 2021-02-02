import { asset } from 'mock-data'
import { AssetItem } from 'components'
import { customRender } from 'services/test-utils'
import { Table, TableBody } from '@material-ui/core'

describe('AssetItem', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <Table>
        <TableBody>
          <AssetItem asset={asset} />
        </TableBody>
      </Table>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
