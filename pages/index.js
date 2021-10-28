import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BreweryHome from './BreweryHome'
import Header from '../components/Header'

export default function Home() {

  return (
    <div>
      <BreweryHome />
    <Header />
    </div>
  )
}
