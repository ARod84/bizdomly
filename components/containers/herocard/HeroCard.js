import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import parse from 'html-react-parser';
import styles from './HeroCard.module.scss';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const HeroCard = ({allInsights}) => {
  const [mounted, setMounted] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className={`${styles.card_wrapper} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h2 className={`${limelight.className} ${styles.card_title}`}>
        Featured articles
      </h2>
      
      {allInsights.map((ins) => (
        <article key={ins.id}>
          <Link href={`${ins.uri}`}>
          <h3 className={`${styles.card_listing__title} ${limelight.className}`}>
            <span className={styles.card_underline}>
              {ins.title}
            </span>
          </h3>
          </Link>
          <div className={styles.card_listing__text}>{parse(ins.excerpt.substring(0, 40)+ '...')}</div>
        </article>
      ))}
    </section>
  )
}

export default HeroCard;