import { Limelight } from 'next/font/google';
import styles from './HeroBox.module.scss';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const HeroBox = () => {
  return (
    <section className={styles.hero_wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.hero_inner}>
        <img src='/images/hero.jpg' alt='Hero image' />
        <div className={styles.hero_text}>
          <span className={styles.hero_tag}>Category tag</span>
          <h1 className={limelight.className}>
            <span className={styles.hero_underline}>Latest Insigths from Our Techies</span>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam ante, 
            imperdiet at feugiat id, iaculis nec nibh. Donec eget massa feugiat.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroBox;