import { customRender } from 'services/test-utils'
import { ValueColor } from 'components'

describe('ValueColor', () => {
  it('Should render it correctly if the value is greater than 0', async () => {
    const renderResult = customRender(<ValueColor value={5.5}>5.5</ValueColor>)
    expect(renderResult).toMatchSnapshot()
  })

  it('Should render it correctly if the value is less than 0', async () => {
    const renderResult = customRender(
      <ValueColor value={-2.55}>-2.55</ValueColor>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
