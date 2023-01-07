import Head from 'next/head'

import { DatePicker } from "antd";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main >
        <DatePicker />
      </main>
    </>
  )
}
