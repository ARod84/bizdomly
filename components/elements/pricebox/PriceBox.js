import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './PriceBox.module.scss'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const PriceBox = ({ 
    content,
    color
}) => {
  const [mounted, setMounted] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  return (
    <article className={`${styles.price_box} ${theme === 'dark' ? styles.dark : styles.light}`} style={color}>
      <div className={styles.pricebox_heading}>
        <h3>{content.courseACF.shortDescription}</h3>
      </div>
      <div className={styles.pricebox_title}>
        <div className={styles.pricebox_title_wrapper}>
          <p className={styles.pricebox_title__price}>
            <span>$</span>
            {content.courseACF.price}
          </p>
          <h2 className={styles.pricebox_title__title}>
            {content.title}
          </h2>
        </div>
        <p className={styles.pricebox_title__discount}>
            {`Apply for the ${content.courseACF.discount} discount`}
        </p>
      </div>
      <ul className={styles.pricebox_features}>
        <li>
          <FontAwesomeIcon icon={faCheck} /> 
          {content.courseACF.feature1}
        </li>
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
        <li>
          <FontAwesomeIcon icon={faCheck} />
          {content.courseACF.feature5}
        </li>
        <button className={styles.pricebox_cta__wrapper}>
          <Link href='#'  className={styles.pricebox_cta__button}>
            Start now!
          </Link>
        </button>
      </ul>
    </article>
  )
}

export default PriceBox