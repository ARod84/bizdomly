import styles from './HeroListing.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Date from '../../Date';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const HeroListing = ({postsData}) => {
  const { theme } = useTheme();
  
  return (
    <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={limelight.className}>News Around the Web</h2>
        <ul className={styles.listing_home__list}>
          {postsData.map(({ 
            id, 
            date, 
            title, 
            image, 
            author,
            excerpt
          }) => (
            <li className={`${styles.listing_home__listItem} ${theme ? styles.dark : styles.light}`} key={id}>
              <div className={styles.listing_home__titleBox}>
                <span className={styles.cat_tag}>Category</span>
                <Image src={`${image}`} alt='Mano tengo fe' width='100' height='100' />
                <div className={styles.listing_home__text}>
                  <Link 
                    href={`/posts/${id}`} 
                    className={`${styles.listing_home__title} ${limelight.className}`}>
                    {title}
                  </Link>
                  <p>{excerpt}</p>
                </div>
              </div>
              <div className={styles.listing_home__dataBox}>
                <p className={styles.listing_home__author}>
                  {author}
                </p>
                <p className={styles.listing_home__date}>
                  <Date dateString={date} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
  )
}

export default HeroListing;