import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Footer from './Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
