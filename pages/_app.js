import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  const pageVariants = {
    hidden: {
      opacity: 0.8,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 5,
        ease: 'easeInOut',
      },
    },
    exit: {
      y: 100,
      transition: {
        type: 'spring',
        stiffness: 300,
        duration: 5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>

      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </Head>

        <motion.div
          key={router.route}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageVariants}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>

      <ToastContainer />
    </>
  )
}

export default MyApp
