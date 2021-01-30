import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePrice } from 'states/prices'

const useLivePrices = () => {
  const dispatch = useDispatch()

  const liveUpdate = () => {
    const priceWs = new WebSocket(process.env.NEXT_PUBLIC_COINCAP_WEBSOCKET_ALL)

    priceWs.onmessage = (msg: MessageEvent) => {
      const dataObject = JSON.parse(msg.data)
      dispatch(updatePrice(dataObject))
    }
  }

  useEffect(() => {
    liveUpdate()
  }, [])
}

export default useLivePrices
