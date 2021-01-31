import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { TopBar, Header, LivePrices } from 'components'
import { ThemeProvider } from '@material-ui/core'
import Theme from 'styles'
import Store from 'states'
import 'styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <LivePrices />
        <TopBar />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
