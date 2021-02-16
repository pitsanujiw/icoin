import { IGlobalData } from 'types'
import { updateGlobal } from 'states/global'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useQuery, GLOBALS } from 'apollo'

const useGlobal = (): void => {
  const dispatch = useDispatch()
  const { loading, data } = useQuery<IGlobalData>(GLOBALS)

  useEffect(() => {
    if (!loading) {
      dispatch(updateGlobal(data))
    }
  }, [loading])
}

export { useGlobal }
