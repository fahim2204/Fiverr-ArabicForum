import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from "next-auth/react"
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
export default function App({  Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {/* <Navbar/> */}
      <Menubar/>
      <Component {...pageProps}/>
      <Footer/>
    </SessionProvider>
  )
}
