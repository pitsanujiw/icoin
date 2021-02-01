import { DURATION } from 'data'
import { IRootStore } from 'types'
import { PriceDirection } from 'services'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const usePriceDirection = (id: string, initPrice: number) => {
  const [direction, setDirection] = useState(PriceDirection.VOID)
  const livePrice = useSelector((store: IRootStore) => store.prices.data[id])
  const price = livePrice || initPrice

  useEffect(() => {
    if (livePrice > initPrice) {
      setDirection(PriceDirection.UP)
    } else {
      setDirection(PriceDirection.DOWN)
    }

    const clearDirectionTimeoutId = setTimeout(
      () => setDirection(PriceDirection.VOID),
      DURATION
    )

    return () => clearTimeout(clearDirectionTimeoutId)
  }, [livePrice, initPrice])

  return { direction, price }
}

export { usePriceDirection }
