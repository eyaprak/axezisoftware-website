import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  )
}

export default MyApp
