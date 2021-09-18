import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <h1>Caffe</h1>
    </div >
  )
}
