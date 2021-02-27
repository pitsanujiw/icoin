import { Assets } from 'components'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

const HomePage = (): React.ReactElement => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title="ICoin / Cryptocurrency Market Data"
        description="Real-time cryptocurrency market cap rankings, trading charts, and more."
        openGraph={{
          url: router.pathname,
          images: [{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/main.png` }]
        }}
      />
      <Assets />
    </>
  )
}

export default HomePage
