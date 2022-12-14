import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//components
import Intro from '../components/Intro'
import About from '../components/About'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <About />
      <Welcome />
      <Footer />
    </div>
  )
}
