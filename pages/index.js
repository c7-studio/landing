import Head from 'next/head';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Marqui from '../components/Marqui';
import Marqui2 from '../components/Marqui2';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';



export default function Home() {  
  return (
    <div className='{styles.container}'>
      <Head>
        <title>C7 Studio</title>
        <meta name='description' content='c7 Studio is a creative agency based on collaboration.
        We associate with companies that need performant and enticing solutions for their digital products' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <Hero/>
      <Marqui />
      <Services/>
      <Projects/>
      <Marqui2 />
      <Contact/> 
    </div>
  )
}