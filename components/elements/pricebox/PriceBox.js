import { useEffect, useState } from 'react'
import styles from './PriceBox.module.scss'
import { useTheme } from 'next-themes'

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
      <div className={styles.pricebox_features}>
        <h3>{content.courseACF.feature1}</h3>
        <h3>{content.courseACF.feature2}</h3>
        <h3>{content.courseACF.feature3}</h3>
        <h3>{content.courseACF.feature4}</h3>
        <h3>{content.courseACF.feature5}</h3>
        <button className={styles.pricebox_cta}>Start now!</button>
      </div>
    </article>
  )
}

export default PriceBox