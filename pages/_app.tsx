import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Quicksand } from '@next/font/google'

const inter = Quicksand({
  weight: '500',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
}
