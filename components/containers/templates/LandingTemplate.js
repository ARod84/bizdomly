import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './LandingTemplate.module.scss'
import Head from 'next/head'
import Accordeon from '../../elements/accordeon/Accordeon'

const LandingTemplate = ({ postData }) => {
  return (
    <>
    <Head>
      <title>{postData?.title}</title>
    </Head>
    <section className={styles.landing_hero}>
      <div className={styles.infobox_text}>
        <h2>
            {postData?.title}
        </h2>
        <div className={styles.infobox_text__price}>
          <span>{postData?.courseACF.price}$</span>|
          <span>{postData?.courseACF.feature1}</span>
        </div>
        <ul className={styles.infobox_text__list}>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            {postData?.courseACF.feature2}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            {postData?.courseACF.feature3}
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            {postData?.courseACF.feature4}
          </li>
        </ul>
        <button className={styles.infobox_addtocart}>
            Add to cart
        </button>
      </div>
    </section>
    <div className={styles.landing_body}>
      <section className={styles.landing_modules}>
        <h2>Course Modules</h2>
        <Accordeon content={postData?.courseACF.courseModules} />
      </section>
      <section className={styles.landing_sinopsis}>
        <h2>{postData.courseACF.description}</h2>
        <button>Join now!</button>
      </section>
      <section className={styles.landing_faq}>
        <h2>Frequently Asked Questions</h2>
      </section>
    </div>
    </>
  )
}

export default LandingTemplate