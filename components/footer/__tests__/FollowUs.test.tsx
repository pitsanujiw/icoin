import { customRender } from 'services/test-utils'
import { FollowUs } from 'components'

describe('FollowUs', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(<FollowUs />)
    expect(renderResult).toMatchSnapshot()
  })
})
