import { customRender } from 'services/test-utils'
import { IconLoading } from 'components'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

describe('IconLoading', () => {
  it('Should render it correctly when loading is true', async () => {
    const renderResult = customRender(
      <IconLoading loading>
        <ArrowDownwardIcon />
      </IconLoading>
    )
    expect(renderResult).toMatchSnapshot()
  })

  it('Should render it correctly when loading false', async () => {
    const renderResult = customRender(
      <IconLoading loading={false}>
        <ArrowDownwardIcon />
      </IconLoading>
    )
    expect(renderResult).toMatchSnapshot()
  })
})
