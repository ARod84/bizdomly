import styles from './InfoBox.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const InfoBox = ({ content }) => {
  return (
    <article className={styles.infobox_wrapper}>
      <div className={styles.infobox_wrapper__inner}>
        <div className={styles.infobox_image}>
          <Image src={content.featuredImage?.node.sourceUrl} width='228' height='228' />
        </div>
        <div className={styles.infobox_text}>
          <h2>
            <Link href={`landings/${content.slug}`}>
              {content.title}
            </Link>
          </h2>
          <div className={styles.infobox_text__price}>
            <span>{content.courseACF.price}$</span>|
            <span>{content.courseACF.feature1}</span>
          </div>
          <ul className={styles.infobox_text__list}>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              {content.courseACF.feature2}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              {content.courseACF.feature3}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              {content.courseACF.feature4}
            </li>
          </ul>
          <button className={styles.infobox_addtocart}>
              Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default InfoBox