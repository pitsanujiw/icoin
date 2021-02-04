import { ApolloProvider, apolloClient } from 'apollo'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { TopBar, Header, Search, LivePrices } from 'components'
import { Theme } from 'styles'
import { useEffect } from 'react'
import Store from 'states'
import 'styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={Store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <LivePrices />
          <TopBar />
          <Header />
          <Search />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
