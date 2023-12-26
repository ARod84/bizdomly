import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
// Responsive resources
import { useMediaQuery } from 'react-responsive'
import { device } from '../../../utils/mediaqueries.js'
import styles from './InfoBoxMobile.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const InfoBoxMobile = ({ content }) => {
  const [mounted, setMounted] = useState()
  const {theme} = useTheme()

  // Media queries and devices
  const isLaptop = useMediaQuery({ query: device.laptop })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <article className={`${styles.infobox_wrapper} ${theme === 'dark' ? styles.dark : styles.light}`}>
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
            <Link href={`/checkout/${content.id}`}>
              Join now!
            </Link>
          </button>
        </div>
      </div>
    </article>
  )
}

export default InfoBoxMobile