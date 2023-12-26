import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './LandingTemplate.module.scss'
import Head from 'next/head'
import Accordeon from '../../elements/accordeon/Accordeon'
import Image from 'next/image'

const LandingTemplate = ({ postData }) => {
  const [mounted, setMounted] = useState();
  const {theme} = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
    <Head>
      <title>{postData?.title}</title>
    </Head>
    <section className={`${styles.landing_hero} ${theme === 'dark' ? styles.dark : styles.light}`}>
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
    <div className={`${styles.landing_body} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <section className={styles.landing_modules}>
        <h2>Course Modules</h2>
        <Accordeon content={postData?.courseACF.courseModules} />
      </section>
      <section className={styles.landing_sinopsis}>
        <div className={styles.landing_sinopsis__text}>
          <h2>{postData.courseACF.description}</h2>
          <button className={styles.landing_sinopsis__cta_wrapper}>
            <Link href={`/checkout/${postData?.id}`} className={styles.landing_sinopsis__cta}>
              Join now!
            </Link>
          </button>
        </div>
        <Image src='/images/solopreneur-remote.jpg' width='450' height='350' />
      </section>
      <section className={styles.landing_faq}>
        <h2>Frequently Asked Questions</h2>
        <Accordeon content={postData?.courseACF.courseModules} />
      </section>
    </div>
    </>
  )
}

export default LandingTemplate