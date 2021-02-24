import { customRender } from 'services/test-utils'
import { RouterLoadingContent } from 'components'

describe('RouterLoadingContent', () => {
  it('Should render it correctly when loading is true', async () => {
    const renderResult = customRender(<RouterLoadingContent loading />)
    expect(renderResult).toMatchSnapshot()
  })

  it('Should render it correctly when loading is false', async () => {
    const renderResult = customRender(<RouterLoadingContent loading={false} />)
    expect(renderResult).toMatchSnapshot()
  })
})
