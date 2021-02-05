import { customRender } from 'services/test-utils'
import { ContainerWrapper } from 'components'

describe('ContainerWrapper', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <ContainerWrapper>Hello, World!</ContainerWrapper>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
