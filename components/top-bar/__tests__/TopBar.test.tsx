import { API } from 'services'
import {
  act,
  customRender,
  mockResponse,
  RenderResult,
} from 'services/test-utils'
import { TopBar } from 'components/top-bar/TopBar'
import Globals from 'mock-data/globals.json'

describe('TopBar', () => {
  it('Should render correctly', async () => {
    let renderResult: RenderResult

    await act(async () => {
      renderResult = customRender(<TopBar />)
    })

    expect(API.getGlobals).toHaveBeenCalled()
    expect(API.getGlobals).toHaveReturnedWith(mockResponse(Globals))
    expect(renderResult).toMatchSnapshot()
  })
})
