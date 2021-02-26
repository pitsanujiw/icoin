import { ApolloProvider, apolloClient } from 'apollo'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Divider, ThemeProvider, CssBaseline } from '@material-ui/core'
import {
  TopBar,
  Header,
  Search,
  LivePrices,
  Disclaimer,
  Footer,
  FooterBottom,
  RouteLoading,
  useTheme
} from 'components'
import { useEffect } from 'react'
import Store from 'states'
import 'styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const theme = useTheme()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={Store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <RouteLoading>
            <CssBaseline />
            <LivePrices />
            <TopBar />
            <Header />
            <Search />
            <Component {...pageProps} />
            <Disclaimer />
            <Divider light />
            <Footer />
            <FooterBottom />
          </RouteLoading>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
