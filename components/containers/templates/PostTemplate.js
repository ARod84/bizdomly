import Image from 'next/image'
import Date from '../../elements/date/Date'
import styles from './PostTemplate.module.scss'
import Head from 'next/head'
import Quote from '../../elements/quote/Quote'
import Author from '../../elements/author/Author'

const PostTemplate = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      <article className={styles.post_wrapper}>
        <div className={styles.header_wrapper}>
          <Image
            src={postData?.featuredImage ? postData?.featuredImage?.node.sourceUrl : '/images/mano-tengo-fe.jpg'} 
            alt={postData?.title} 
            width='300' height='225'
            className={styles.header_image}
          />
          <Quote />
        </div>
        <div className={styles.post_content}>
          <h1 className={styles.headingXl}>{postData?.title}</h1>
          <div className={styles.lightText}>
            {/*<Date dateString={postData?.date} />*/}
          </div>
          <div className={styles.post_content__art} dangerouslySetInnerHTML={{ __html: postData?.content }} />
        </div>
        {postData?.author ?
          <Author 
            author={postData?.author}
          />
          :
          ''
        }
      </article>
    </>
  )
}

export default PostTemplate;