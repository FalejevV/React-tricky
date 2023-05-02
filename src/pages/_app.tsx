import MenuToggleButton from '@/components/MenuToggleButton/MenuToggleButton';
import Menu from '@/layout/Menu/Menu';
import '@/styles/globals.css'
import { PageMain } from '@/styles/styles.styled';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Tricky components</title>
        <meta name="description" content="Website about tricky components practice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/> 
      </Head>
      <PageMain>
          <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>
          <MenuToggleButton toggleMenu={toggleMenu} onClick={() => setToggleMenu(prev => !prev)}/>
          <Component setToggleMenu={setToggleMenu} {...pageProps} />
      </PageMain>
    </>
  )
}
