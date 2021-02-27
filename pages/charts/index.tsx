import { Charts } from 'components'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const ChartsPage = (): React.ReactElement => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title="Charts - ICoin / Cryptocurrency Market Data"
        description="Real-time cryptocurrency market cap rankings, trading charts, and more."
        openGraph={{
          url: router.pathname,
          images: [{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/charts.png` }]
        }}
      />
      <Charts />
    </>
  )
}

export default ChartsPage
