import Head from 'next/head';
import Link from 'next/link';
import { ThemeProvider } from '../../context/ThemeContext';
{/**Components */}
import BrxHeader from '../containers/header/BrxHeader';
{/** Estilos */}
import styles from './Layout.module.scss';

export const siteTitle = 'Bruixa Online Marketing';
export const siteDescription= 'Best web marketing tips for small business';

export default function Layout({ children, home }) {
  return (
    <ThemeProvider>
      <div className={styles.container}>
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
        <BrxHeader home={home} />
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}