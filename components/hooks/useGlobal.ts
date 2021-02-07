import { API } from 'services'
import { updateGlobal } from 'states/globals'
import { useAsync } from 'react-use'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useGlobal = (): void => {
  const dispatch = useDispatch()
  const { loading, value } = useAsync(API.getGlobals)

  useEffect(() => {
    if (!loading) {
      dispatch(updateGlobal(value.data.data))
    }
  }, [loading])
}

export { useGlobal }
