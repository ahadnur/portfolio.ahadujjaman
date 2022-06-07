import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import {AiFillEdit} from 'react-icons/ai'
import { SiPluscodes } from 'react-icons/si'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ahadujjamn Nur</title>
        <meta name="description" content="Ahadujjaman Nur's Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

        <Nav />
      <div className="">
          <div className="container">
            <Hero />

          </div>
      </div>
    </>
  )
}
