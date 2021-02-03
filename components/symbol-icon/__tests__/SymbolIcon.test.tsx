import { customRender, RenderResult, act } from 'services/test-utils'
import { SymbolIcon } from 'components'

describe('SymbolIcon', () => {
  it('Should render it correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(
        <SymbolIcon name="Bitcoin" symbol="bitcoin" />
      )
    })

    expect(renderResult).toMatchSnapshot()
  })
})
