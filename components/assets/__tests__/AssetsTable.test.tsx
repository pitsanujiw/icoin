import { act, customRender, RenderResult } from 'services/test-utils'
import { AssetsTable } from 'components'
import { assets } from 'mock-data'

describe('AssetsTable', () => {
  it('Should render assets table correctly', async () => {
    const { data } = assets
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(<AssetsTable data={data} />)
    })

    expect(renderResult).toMatchSnapshot()
  })
})
