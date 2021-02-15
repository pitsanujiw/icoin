import { customRender } from 'services/test-utils'
import { ExchangeContent } from 'components'
import { exchanges } from 'mock-data'

describe('ExchangeContent', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<ExchangeContent exchanges={exchanges} />)
    expect(renderResult).toMatchSnapshot()
  })
})
