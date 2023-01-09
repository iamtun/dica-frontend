import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Quicksand } from '@next/font/google'

import { ConfigProvider } from 'antd'
import '../styles/globals.scss'

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin', 'vietnamese']
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <ConfigProvider 
      theme={{
        token: {
          fontFamily: `${quicksand.style.fontFamily} !important`
        }
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  </>
}
