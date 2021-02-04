import { customRender } from 'services/test-utils'
import { TimeSelection } from 'components'

describe('TimeSelection', () => {
  it('Should render it correctly', async () => {
    const renderResult = customRender(
      <TimeSelection time="1D" onTimeChange={jest.fn()} />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
