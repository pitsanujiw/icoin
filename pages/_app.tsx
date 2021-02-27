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
import { DefaultSeo } from 'next-seo'
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
            <DefaultSeo
              openGraph={{
                type: 'website',
                locale: 'en_IE',
                site_name: 'ICoin / Cryptocurrency Market Data'
              }}
              twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image'
              }}
            />
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
