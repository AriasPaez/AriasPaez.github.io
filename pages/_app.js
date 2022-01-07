import '../styles/globals.css';
import { NextIntlProvider } from 'next-intl';
import AppLayout from '../components/AppLayout/appLayout.js';
import Head from 'next/head';

import { useEffect } from 'react';

// import { darkMode } from '../utils/darkMode.js';
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <AppLayout>
      <Head>
        <title>Cristian Arias Dev</title>
        <meta name="description" content="Cristian Arias Web App" />
        <meta name="author" content="Cristian Arias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </AppLayout>
  );
}
{
  /* MyApp.messages = ['AppLayout'];
 export async function getStaticProps({ locale }) {
   console.log('---');
   console.log(locale);
   console.log('...');
   try {
     const translations = await import(`../translations/${locale}.json`);
     return {
       props: {
         messages: pick(translations, MyApp.messages),
       },
     };
   } catch (error) {
     console.error(`Cannot get file from folder ${locale}`);
     return {
       props: { title: 'title default' },
     };
   }
 } */
}
