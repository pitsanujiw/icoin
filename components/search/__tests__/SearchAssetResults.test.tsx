import { customRender } from 'services/test-utils'
import { SearchAssetResults } from 'components'
import { search } from 'mock-data'

describe('SearchAssetResults', () => {
  it('Should render it correctly if assets are not empty', async () => {
    const renderResult = customRender(
      <SearchAssetResults assets={search.assets} />
    )
    expect(renderResult).toMatchSnapshot()
  })

  it('Should render it correctly if assets are empty', async () => {
    const renderResult = customRender(
      <SearchAssetResults
        assets={{
          edges: []
        }}
      />
    )
    expect(renderResult).toMatchSnapshot()
  })
})
