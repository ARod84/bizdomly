import styles from './Accordeon.module.scss'

const Accordeon = ({content}) => {
    console.log(content)
  return (
    <ul className={styles.accordeon_modules__items}>
      <li className={styles.accordeon_modules__item}>
        <h3>{content?.module1}</h3>
        <p>{content?.module1Content}</p>
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module2}
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module3}
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module4}
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module5}
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module6}
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module7}
      </li>
      <li className={styles.accordeon_modules__item}>
        {content?.module8}
      </li>
    </ul>
  )
}

export default Accordeon