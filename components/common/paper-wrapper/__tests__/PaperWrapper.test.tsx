import { customRender } from 'services/test-utils'
import { PaperWrapper } from 'components'

describe('PaperWrapper', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <PaperWrapper>Hello, World!</PaperWrapper>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
