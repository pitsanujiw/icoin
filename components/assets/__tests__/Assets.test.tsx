import { Assets } from 'components'
import { act, customRender, RenderResult } from 'services/test-utils'

describe('Assets', () => {
  it('Should render it correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(<Assets />)
    })

    expect(renderResult).toMatchSnapshot()
  })
})
