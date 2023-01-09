import { DatePicker } from 'antd'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main >
        <h1>Home Page</h1>
        <DatePicker />
      </main>
    </>
  )
}
