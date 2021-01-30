import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePrice } from 'states/prices'

const useLivePrices = () => {
  const dispatch = useDispatch()

  const liveUpdate = () => {
    const priceWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')

    priceWs.onmessage = (msg: MessageEvent) => {
      const dataObject = JSON.parse(msg.data)
      dispatch(updatePrice(dataObject))
    }
  }

  useEffect(() => {
    liveUpdate()
  }, [liveUpdate])
}

export default useLivePrices
