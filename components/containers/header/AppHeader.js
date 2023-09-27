import Image from 'next/image';
import Link from 'next/link';
import styles from './AppHeader.module.scss';
import { siteTitle } from '../../layout/Layout';
import utilStyles from '../../../styles/utils.module.scss';
import ThemeToggleBtn from '../../elements/ThemeToggleBtn';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const AppHeader = ({ home }) => {

  return (
    <header className={styles.header}>
        {home ? (
          <>
            <h1 className={limelight.className}>{ siteTitle }</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/mano-tengo-fe.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                meqll
              </Link>
            </h2>
          </>
        )}
        <div className={styles.header_links}>
          <ThemeToggleBtn />
          <Link href='/'>
            Insights
          </Link>
          <Link href='/'>
            Courses
          </Link>
          <Link href='/'>
            Become
          </Link>
        </div>
      </header>
  )
}

export default AppHeader;