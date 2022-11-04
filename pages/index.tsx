import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import Test from '../components/Test'
import Test2 from '../components/Test2'
import ThirdPage from '../components/ThirdPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sirius Future</title>
      </Head>
      
      {/* <FirstPage /> */}
      {/* <SecondPage /> */}
      <ThirdPage />

    </div>
  )
}
