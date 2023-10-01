import Link from 'next/link';
import { useTheme } from 'next-themes';
import styles from './AppFooter.module.scss';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const AppFooter = () => {
  const {theme} = useTheme();

  return (
    <footer className={styles.footer_wrapper}>
      <div className={`${styles.footer_links} ${theme ? styles.dark : styles.light}`}>
        <Link href='/'>Privacy Policy</Link>
        <Link href='/'>Terms and conditions</Link>
        <Link href='/'>About</Link>
      </div>
      <div className={styles.foot}>
        <span className={`${styles.foot_logo} ${limelight.className}`}>Bizdomly</span> © All rights reserved
      </div>
    </footer>
  )
}

export default AppFooter