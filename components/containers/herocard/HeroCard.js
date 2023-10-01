import React from 'react';
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
  const { theme } = useTheme();

  return (
    <section className={`${styles.card_wrapper} ${theme ? styles.dark : styles.light}`}>
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