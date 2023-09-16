import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import ThemeToggleBtn from '../../elements/ThemeToggleBtn';

const Header = ({ home }) => {

  return (
    <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/mano-tengo-fe.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>Ajá</h1>
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
        <ThemeToggleBtn />
      </header>
  )
}

export default Header;