import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import styles from './AppHeader.module.scss';
import { siteTitle } from '../../layout/Layout';
import ThemeToggleBtn from '../../elements/ThemeToggleBtn';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const AppHeader = ({ home }) => {
  const { theme } = useTheme();

  return (
    <header className={`${styles.header} ${theme ? styles.dark : styles.light}`} style={{ 'zIndex': 9999}}>
      <div className={styles.container}>
            <h1 className={limelight.className}>{ siteTitle }</h1>
    
        <div className={`${styles.header_links}`}>
          <ThemeToggleBtn />
          <Link href='/'>
            Insights
          </Link>
          <Link href='/'>
            News
          </Link>
          <Link href='/'>
            Become a Business Owner
          </Link>
        </div>
        </div>
      </header>
  )
}

export default AppHeader;