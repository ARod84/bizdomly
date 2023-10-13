import { Limelight } from 'next/font/google';
import Link from 'next/link';
import styles from './HeroBox.module.scss';
import parse from 'html-react-parser';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

export default function HeroBox ({ insights }) {
  
  const title   = insights[0].title;
  const excerptLen = insights[0].excerpt;
  const tag = insights[0].insightsACF.tagline;
  const excerpt = excerptLen.substring(0, 140) + '...';
  const uri = insights[0].uri;

  return (
    <section className={styles.hero_wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.hero_inner}>
        <img src='/images/hero.jpg' alt='Hero image' />
        <div className={styles.hero_text}>
          <span className={styles.hero_tag}>{tag}</span>
          <Link href={`${uri}`}>
            <h1 className={limelight.className}>
              <span className={styles.hero_underline}>{title}</span>
            </h1>
          </Link>
          {parse(excerpt)}
        </div>
      </div>
    </section>
  )
}