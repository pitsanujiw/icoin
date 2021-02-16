import { customRender } from 'services/test-utils'
import { LoadMore } from 'components'

describe('LoadMore', () => {
  it('Should render it correctly when loading is true', async () => {
    const renderResult = customRender(<LoadMore onLoad={jest.fn()} loading />)
    expect(renderResult).toMatchSnapshot()
  })

  it('Should render it correctly when loading false', async () => {
    const renderResult = customRender(
      <LoadMore onLoad={jest.fn()} loading={false} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
