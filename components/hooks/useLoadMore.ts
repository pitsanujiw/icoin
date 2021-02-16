import { useState } from 'react'

interface IUseLoadMore {
  count: number

  onLoad: () => void
}

const useLoadMore = (initCount: number): IUseLoadMore => {
  const [count, setCount] = useState(initCount)

  const onLoad = () => setCount(prevState => (prevState += initCount))

  return { count, onLoad }
}

export { useLoadMore }
