import { API } from 'services'
import {
  act,
  customRender,
  mockResponse,
  RenderResult,
} from 'services/test-utils'
import { TopBar } from 'components/top-bar/TopBar'
import { globals } from 'mock-data'

describe('TopBar', () => {
  it('Should render correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(<TopBar />)
    })

    expect(API.getGlobals).toHaveBeenCalled()
    expect(API.getGlobals).toHaveReturnedWith(mockResponse(globals))
    expect(renderResult).toMatchSnapshot()
  })
})
