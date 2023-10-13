import { useState, useEffect, useSyncExternalStore } from 'react';
import styles from './CoursesListing.module.scss';
import { useTheme } from 'next-themes';
import { Limelight } from 'next/font/google';
import Link from 'next/link';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const CoursesListing = ({courses}) => {
  const [mounted, setMounted] = useState();
  const {theme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
 console.log(courses)
  return (
    <div className={`${styles.courses_listing} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <h2 className={`${limelight.className} ${styles.courses_title}`}>
            Courses Listing
        </h2>
        {courses.map((cr) => (
            <div className={styles.courses_listing__item} key={cr.id}>
                <Link href={`${cr.uri}`}>
                    <h3 className={`${styles.courses_listing__title} ${limelight.className}`}>
                        <span className={styles.courses_listing__underline}>
                            {cr.title}
                        </span>
                    </h3>
                </Link>
                <div className={styles.courses_listing__text}>
                    {cr.courseACF.shortDescription}
                </div>
            </div>
        ))}
    </div>
  )
}

export default CoursesListing