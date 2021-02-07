import { act, customRender, RenderResult } from 'services/test-utils'
import { AssetsTable } from 'components'
import { useRouter } from 'next/router'

describe('Assets', () => {
  beforeEach(() => {
    ;(useRouter as jest.Mock).mockImplementation(() => ({
      query: {
        page: 2
      },
      push: jest.fn()
    }))
  })

  it('Should render assets table correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(
        <AssetsTable active_cryptocurrencies={6000} />
      )
    })

    expect(renderResult).toMatchSnapshot()
  })
})
