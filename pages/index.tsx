import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { DatePicker } from "antd";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <DatePicker />
      </main>
    </>
  )
}
