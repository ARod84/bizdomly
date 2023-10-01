import { useState, useEffect, useSyncExternalStore } from 'react';
import styles from './CoursesListing.module.scss';
import { useTheme } from 'next-themes';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const CoursesListing = () => {
  const [mounted, setMounted] = useState();
  const {theme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`${styles.courses_listing} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <h2 className={limelight.className}>
            Courses Listing
        </h2>
        <div className={styles.courses_listing__item}>
            <h3 className={`${styles.courses_listing__title} ${limelight.className}`}>
                <span className={styles.courses_listing__underline}>
                    Holix title lorem stuff
                </span>
            </h3>
            <p className={styles.courses_listing__text}>
                But I must explain to you how all this mistaken idea of denouncing.
            </p>
        </div>
        <div className={styles.courses_listing__item}>
            <h3 className={`${styles.courses_listing__title} ${limelight.className}`}>
                <span className={styles.courses_listing__underline}>
                    Holix title lorem stuff
                </span>
            </h3>
            <p className={styles.courses_listing__text}>
                But I must explain to you how all this mistaken idea of denouncing.
            </p>
        </div>
        <div className={styles.courses_listing__item}>
            <h3 className={`${styles.courses_listing__title} ${limelight.className}`}>
                <span className={styles.courses_listing__underline}>
                    Holix title lorem stuff
                </span>
            </h3>
            <p className={styles.courses_listing__text}>
                But I must explain to you how all this mistaken idea of denouncing.
            </p>
        </div>
    </div>
  )
}

export default CoursesListing