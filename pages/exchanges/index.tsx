import { Exchanges } from 'components'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const ExchangesPage = (): React.ReactElement => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title="Exchanges - ICoin / Cryptocurrency Market Data"
        description="Real-time cryptocurrency market cap rankings, trading charts, and more."
        openGraph={{
          url: router.pathname,
          images: [{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/charts.png` }]
        }}
      />
      <Exchanges />
    </>
  )
}

export default ExchangesPage
