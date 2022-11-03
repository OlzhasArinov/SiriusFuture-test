import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import FirstPage from '../components/FirstPage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sirius Future</title>
      </Head>
      
      <FirstPage />

    </div>
  )
}
