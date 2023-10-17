import styles from './HeroListing.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Date from '../../elements/date/Date';
import parse from 'html-react-parser';
import { Limelight } from 'next/font/google';

const limelight = Limelight( { 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

const HeroListing = ({ postsData }) => {
  const { theme } = useTheme();

  return (
    <section className={`${styles.listing_home__wrapper}`}>
        <h2 className={limelight.className}>News Around the Web</h2>
        <ul className={styles.listing_home__list}>
          {postsData.map(({ 
            databaseId, 
            date, 
            title,
            uri,
            excerpt,
            author,
            featuredImage
          }) => (
            <li className={`${styles.listing_home__listItem} ${theme === 'dark' ? styles.dark : styles.light}`} key={databaseId}>
              <div className={styles.listing_home__titleBox}>
                <div className={styles.listing_home__imageWrapper}>
                  <span className={styles.cat_tag}>Category</span>
                  <Image 
                    src={featuredImage ? featuredImage?.node.sourceUrl : '/images/mano-tengo-fe.jpg'} 
                    alt={title} 
                    width='100' 
                    height='100' 
                  />
                </div>
                <div className={styles.listing_home__text}>
                  <Link 
                    href={`/news${uri}`} 
                    className={`${styles.listing_home__title} ${limelight.className}`}>
                      {title}
                  </Link>
                  {parse(excerpt)}
                </div>
              </div>
              <div className={styles.listing_home__dataBox}>
                <p className={styles.listing_home__author}>
                  { `${author.node.firstName} ${author.node.lastName}` }
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