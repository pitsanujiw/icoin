import { customRender } from 'services/test-utils'
import { Pagination } from 'components'

describe('Pagination', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <Pagination count={125} onChangePage={jest.fn()} page={1} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
