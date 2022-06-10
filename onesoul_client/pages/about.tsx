import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

export default function About() {
  return (
    <div className={styles.container}>
      <NavBar />
      About
    </div>
  )
}