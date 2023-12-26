import { useState, useEffect} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const [mounted, setMounted] = useState();
  const { theme } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  } 

  return (
    <>
      <div className={`${styles.menu_button} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <FontAwesomeIcon icon={faBars} onClick={handleShow} />
      </div>
      <nav className={`${styles.menu_backdrop} ${theme === 'dark' ? styles.dark : styles.light} ${ show === true ? styles.show : ''}`}>
          <span className={styles.menu_close} onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
          </span>
          <Link href='/insights'>
            Insights
          </Link>
          <Link href='/news'>
            News
          </Link>
          <Link href='/become'>
            Become a Business Owner
          </Link>
      </nav>
    </>
  )
}

export default MobileMenu;