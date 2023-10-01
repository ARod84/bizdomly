import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import styles from './HeroCard.module.scss';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const HeroCard = () => {
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
      <h2 className={limelight.className}>
        Featured articles
      </h2>
      <article>
        <h3 className={`${styles.card_listing__title} ${limelight.className}`}>
          <span className={styles.card_underline}>
            Featured article 1
          </span>
        </h3>
        <p className={styles.card_listing__text}>Lorem ipsum article stuff</p>
      </article>
      <article>
        <h3 className={`${styles.card_listing__title} ${limelight.className}`}>
          <span className={styles.card_underline}>
            Featured article 2
          </span>
        </h3>
        <p className={styles.card_listing__text}>Lorem ipsum article stuff</p>
      </article>
      <article>
        <h3 className={`${styles.card_listing__title} ${limelight.className}`}>
          <span className={styles.card_underline}>
            Featured article 2
          </span>
        </h3>
        <p className={styles.card_listing__text}>Lorem ipsum article stuff</p>
      </article>
    </section>
  )
}

export default HeroCard;