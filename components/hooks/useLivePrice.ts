import { DURATION } from 'data'
import { IRootStore } from 'types'
import { PriceDirection } from 'services'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

interface IuseLivePrice {
  direction: PriceDirection

  price: number
}

const useLivePrice = (id: string, initialPrice: number): IuseLivePrice => {
  const [direction, setDirection] = useState(PriceDirection.VOID)
  const [price, setPrice] = useState(initialPrice)
  const livePrice = useSelector((store: IRootStore) => store.prices.data[id])

  useEffect(() => {
    if (livePrice && livePrice !== price) {
      setDirection(livePrice > price ? PriceDirection.UP : PriceDirection.DOWN)
      setPrice(livePrice)
    }

    const clearDirectionTimeoutId = setTimeout(
      () => setDirection(PriceDirection.VOID),
      DURATION
    )

    return () => clearTimeout(clearDirectionTimeoutId)
  }, [livePrice, price])

  return { direction, price }
}

export { useLivePrice }
