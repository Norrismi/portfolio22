import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Experience from '../Components/Experience'
import Portfolio from '../Components/Portfolio'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className='' style={{marginBottom: '20px'}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   

      <Header />

      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Nav />

    </div>
  )
}
