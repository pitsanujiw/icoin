import { customRender } from 'services/test-utils'
import { ExchangeStatus } from 'components'

describe('ExchangeStatus', () => {
  it('Should render it correctly without time', async () => {
    const renderResult = customRender(<ExchangeStatus />)
    expect(renderResult).toMatchSnapshot()
  })

  it('Should render it correctly with time', async () => {
    const renderResult = customRender(
      <ExchangeStatus updatedAt="2021-02-15T07:46:08.842Z" />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
