import { customRender } from 'services/test-utils'
import { ExchangeItem } from 'components'
import { node } from 'mock-data'
import { Table, TableBody } from '@material-ui/core'

describe('ExchangeItem', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <Table>
        <TableBody>
          <ExchangeItem node={node} />
        </TableBody>
      </Table>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
