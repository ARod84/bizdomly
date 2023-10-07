import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import styles from './AppHeader.module.scss';
import { siteTitle } from '../../layout/Layout';
import ThemeToggleBtn from '../../elements/ThemeToggleBtn';
import { Limelight } from 'next/font/google';
import MobileMenu from '../../elements/mobilemenu/MobileMenu';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const AppHeader = ({ home }) => {
  const [mounted, setMounted] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className={`${styles.header} ${theme === 'dark' ? styles.dark : styles.light}`} style={{ 'zIndex': 9999}}>
      <div className={styles.container}>
        <h1 className={`${styles.logo} ${limelight.className}`}>
          <Link href={'/'}>
            { siteTitle }
          </Link>
        </h1>
        <div className={`${styles.header_links}`}>
          <ThemeToggleBtn />
          <Link href='/' className={styles.notMobile}>
            Insights
          </Link>
          <Link href='/' className={styles.notMobile}>
            News
          </Link>
          <Link href='/' className={styles.notMobile}>
            Become a Business Owner
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export default AppHeader;