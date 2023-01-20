import Head from 'next/head'

import { HeroComponent } from '@/components/HeroComponent';

import { ContactMain } from '@/components/ContactMain';
import { GalleryMain } from '../components/GalleryMain';


export default function Home() {
  return (
    <>
      <Head>
      <title>Prueba MEAT</title>
        <meta
          name="description"
          content="Consigue aquí las mejores recetas para tu paladar"
        />
        <link crossOrigin="true" rel="preconnect" href="https://fonts.googleapis.com" />
        <link crossOrigin="true" rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans&display=swap"
          crossOrigin="true"
        />
      </Head>
      <main>
      <HeroComponent/>
    <GalleryMain/>
      <ContactMain/>
      </main>
    </>
  )
}
