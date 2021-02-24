import { renderHook } from '@testing-library/react-hooks'
import { Routes } from 'services'
import { useChangeRoute } from 'components'

describe('useChangeRoute', () => {
  it('Should return onAssetDetails correctly', async () => {
    const { result } = renderHook(() => useChangeRoute())
    const { onAssetDetails } = result.current

    expect(await onAssetDetails('btc')).toMatchSnapshot()
  })

  it('Should return onPush correctly', async () => {
    const { result } = renderHook(() => useChangeRoute())
    const { onPush } = result.current

    expect(await onPush(Routes.exchanges)).toMatchSnapshot()
  })
})
