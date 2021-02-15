import { assetNode } from 'mock-data'
import { customRender } from 'services/test-utils'
import { ExchangeAssetItem } from 'components'
import { Table, TableBody } from '@material-ui/core'

describe('ExchangeAssetItem', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <Table>
        <TableBody>
          <ExchangeAssetItem assetNode={assetNode} />
        </TableBody>
      </Table>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
