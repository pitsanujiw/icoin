import { act, customRender, RenderResult } from 'services/test-utils'
import { AssetsContent } from 'components'

describe('Assets', () => {
  it('Should render assets content correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(<AssetsContent assets={1600} />)
    })

    expect(renderResult).toMatchSnapshot()
  })
})
