import 'styles/globals.css'
import { Provider } from 'react-redux'
import { LivePrices } from 'components'
import Store from 'states'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={Store}>
      <LivePrices />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
