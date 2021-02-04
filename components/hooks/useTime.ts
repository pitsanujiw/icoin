import { useState } from 'react'
import { ITime, TTime } from 'types'

const useTime = (initialInterval: TTime = '1D'): ITime => {
  const [time, setTime] = useState(initialInterval)

  const onTimeChange = (interval: TTime) => setTime(interval)

  return { time, onTimeChange }
}

export { useTime }
