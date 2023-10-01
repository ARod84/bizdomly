import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
{/**Components */}
import AppHeader from '../containers/header/AppHeader';
import AppFooter from '../containers/footer/AppFooter';
{/** Estilos */}
import styles from './Layout.module.scss';
{/** Fonts */}
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const siteTitle = 'Bizdomly';
export const siteDescription= 'Best web marketing tips for small business';

export default function Layout({ children, home }) {
  const [mounted, setMounted] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <AppHeader home={home} />
      <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content={siteDescription}
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
          <main className={`${home ? styles.home : styles.blog} ${inter.className}`}>
            {children}
          </main>
        <AppFooter />
      </div>
    </>
  );
}